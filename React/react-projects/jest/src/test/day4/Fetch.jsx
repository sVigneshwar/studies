import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Fetch data from an API when the component mounts
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                // Handle the fetched data
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                // Handle any errors
                setError(error);
                setLoading(false);
            })
    }, [])
  return (
    <>
        <h1>Fetch Component</h1>
        {loading && <p>Loading data...</p>}
        {error && <p>Error loading data: {error.message}</p>}
        {data && (
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        )}
    </>
  )
}
