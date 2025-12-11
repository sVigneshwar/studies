import {http, HttpResponse} from 'msw'

export const handlers = [
  http.get('https://api.example.com/products', () => {
    return HttpResponse.json([{id:1,title:'Product 1'}])
  })
]
