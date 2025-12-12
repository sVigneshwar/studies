import '@testing-library/jest-dom'
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter as Router, MemoryRouter, Routes, Route } from 'react-router-dom';
// msw server removed in favor of direct api mocking
import {userEvent} from '@testing-library/user-event'
import React from 'react';
import api from '../api/api';

jest.mock('../api/api');

// MSW lifecycle removed; tests mock `api` directly

describe('Login Page', () => {
    test('renders login form', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/"]}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText('Login Page')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    });

    test('shows validation errors on empty submit', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/"]}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );  
        await userEvent.clear(screen.getByPlaceholderText('name'));
        await userEvent.clear(screen.getByPlaceholderText('password'));
        await userEvent.click(screen.getByText('Login'));
        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
            expect(screen.getByText('Password is required')).toBeInTheDocument();
        });
    });

    test('successful login', async () => {
        // mock API responses for login and profile
        api.post.mockResolvedValueOnce({ data: { username: 'emilys', accessToken: 'valid-token-123', refreshToken: 'refresh-123' } });
        api.get.mockResolvedValueOnce({ data: { id: 1, username: 'emilys', email: 'emilys@example.com' } });
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/"]}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        await userEvent.clear(screen.getByPlaceholderText('name'));
        await userEvent.clear(screen.getByPlaceholderText('password'));
        await userEvent.type(screen.getByPlaceholderText('name'), 'emilys');
        await userEvent.type(screen.getByPlaceholderText('password'), 'emilyspass');
        await userEvent.click(screen.getByText('Login'));
        
        expect(await screen.findByText('Dashboard Page')).toBeInTheDocument();
    });
});