import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      { name: 'name1' },
      { name: 'name2' },
      { name: 'name3' }
    ])
  })
];
