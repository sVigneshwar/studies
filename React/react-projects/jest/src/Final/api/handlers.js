import {http, HttpResponse} from 'msw'

export const handlers = [
  http.get('https://dummyjson.com/products', () => {
    return HttpResponse.json({ products: [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' },
      { id: 3, title: 'Product 3' }
    ]})
  }),

  // dummyjson auth simulation
  http.post('https://dummyjson.com/auth/login', async (req) => {
    const body = await req.json()
    if (body.username === 'kminchelle' && body.password === '0lelplR') {
      return HttpResponse.json({ id: 1, username: 'kminchelle', token: 'fake-token' })
    }
    return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  })
]
