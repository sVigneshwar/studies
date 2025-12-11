import {http, HttpResponse} from 'msw'

export const handlers = [
    http.post('/auth/login', (req) => {
        const { name, password } = req.body;
        if (name === 'emilys' && password === 'emilyspass') {
            return HttpResponse.json({
                name: 'emilys',
                token: 'valid-token-123'
            });
        } else {
            return HttpResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }
    })
];