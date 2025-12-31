import React, {useEffect, useState} from 'react'

function mockFetch(){
  return new Promise((resolve) => setTimeout(() => {
    return resolve(["apple", "banana", "orange"])
  }, 1000))
}

export default function App() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
      fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726566')
        .then(res => setData(res.text()))
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }, [])

    return(
      <>
      {loading && <p>Loading...</p>}
      {error && <p>error...</p>}
      {
      !loading 
      && !error 
      && <p>{data}</p>
      }
      </>
    )
}
