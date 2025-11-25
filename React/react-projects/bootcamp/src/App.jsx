import React, {useEffect, useRef, useState} from 'react'

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

export default function App() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState(STATUS.LOADING)
  const [results, setResults] = useState([])
  const cache = useRef({})

  useEffect(() => {
    const abortController = new AbortController()


    const {signal} = abortController;

    const fetchData = async () => {
      
      try {
        setStatus(STATUS.LOADING)
        if(cache.current[query]) {
          console.log("getting from cache");
          
          setResults(cache.current[query])
          setStatus(STATUS.SUCCESS)
          return
        }
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`, { signal })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        
        const data = await response.json()
        console.log(data);

        cache.current[query] = data.products
        
        setResults(data.products)
        console.log("getting from api")
        setStatus(STATUS.SUCCESS)
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log(STATUS.ERROR)
        } else {
          setStatus(STATUS.ERROR)
        }
      }
    }

    //debounce fetch
   const timerID = setTimeout(fetchData, 500);

    return () => {
      abortController.abort()
      clearTimeout(timerID)
    }
  }, [query])
  
  return (
    <div>

      <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
      {status === STATUS.LOADING && <p>Loading...</p>}
      {status === STATUS.ERROR && <p>Error fetching data.</p>}
      {status === STATUS.SUCCESS && (
        <ul>
          {results.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}

    </div>
  )
}
