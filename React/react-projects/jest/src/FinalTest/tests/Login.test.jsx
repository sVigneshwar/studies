import '@testing-library/jest-dom'
import Login from '../pages/Login';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { server } from './msw/server'
import {userEvent} from '@testing-library/user-event'
import React from 'react';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Login Page', () => {
    test('renders login form', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );  
        expect(screen.getByText('Login Page')).toBeInTheDocument();
        expect(screen.getByLabelText('Name:')).toBeInTheDocument();
        expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    });

    test('shows validation errors on empty submit', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );  
        userEvent.click(screen.getByText('Login'));
        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
            expect(screen.getByText('Password is required')).toBeInTheDocument();
        }
        );
    });

    test('successful login', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
        userEvent.type(screen.getByLabelText('Name:'), 'emilys');
        userEvent.type(screen.getByLabelText('Password:'), 'emilyspass');
        userEvent.click(screen.getByText('Login'));
        await waitFor(() => {
            expect(store.getState().auth.user.name).toBe('emilys');
            expect(store.getState().auth.user.token).toBeDefined();
        });
    });
});