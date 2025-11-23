import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [posts, setPosts] = useState(null);
    const [postsLoading, setPostsLoading] = useState(true);
    const [postsError, setPostsError] = useState(null);

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

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setPostsLoading(false)
            })
            .catch(error => {
                setPostsError(error);
                setPostsLoading(false);
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

        {postsLoading && <p>Loading posts...</p>}
        {postsError && <p>Error loading posts: {postsError.message}</p>}
        {posts && (
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        )}
    </>
  )
}
