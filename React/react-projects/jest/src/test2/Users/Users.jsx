import React, {useEffect, useState} from 'react'

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data.map(user => user.name)))
            .catch(error => console.error('Error fetching users:', error))
    }, [])
  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    </div>
  )
}
