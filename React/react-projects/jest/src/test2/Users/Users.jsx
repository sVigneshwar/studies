import React, {useEffect, useState} from 'react'

export default function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users')
                }
                return response.json()
            })
            .then(data => setUsers(data.map(user => user.name)))
            .catch(error => {
                console.error('Error fetching users:', error)
                setError(error.message)
            })
    }, [])
  return (
    <div>
        <h1>Users List</h1>
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    </div>
  )
}
