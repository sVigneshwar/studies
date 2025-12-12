import { rest } from 'msw'

const BASE = 'https://dummyjson.com'

export const handlers = [
    rest.post(`${BASE}/auth/login`, async (req, res, ctx) => {
        const body = await req.json();
        const { username, password } = body;
        if (username === 'emilys' && password === 'emilyspass') {
            return res(
                ctx.status(200),
                ctx.json({ username: 'emilys', accessToken: 'valid-token-123', refreshToken: 'refresh-123' })
            );
        }

        return res(ctx.status(401), ctx.json({ message: 'Invalid credentials' }));
    }),

    // Return a simple profile for /auth/me so Dashboard can render without network errors
    rest.get(`${BASE}/auth/me`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ id: 1, username: 'emilys', email: 'emilys@example.com' })
        );
    }),

    // Optional refresh endpoint used by api interceptor
    rest.post(`${BASE}/auth/refresh`, async (req, res, ctx) => {
        const body = await req.json();
        if (body.refreshToken === 'refresh-123') {
            return res(ctx.status(200), ctx.json({ accessToken: 'new-access-456', refreshToken: 'refresh-123' }));
        }
        return res(ctx.status(401), ctx.json({ message: 'Invalid refresh' }));
    })
]