import React, {useEffect, useState} from 'react'
import {fetchProducts} from '../api/productsApi'
import ErrorMessage from './ErrorMessage'

export default function ProductList(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try{
      const data = await fetchProducts()
      setProducts(data)
    }catch(e){
      setError(e.message)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{ 
    let isMounted = true
    const loadData = async () => {
      await load()
    }
    if(isMounted) loadData()
    return () => { isMounted = false }
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <ErrorMessage message={error} onRetry={load} />

  return (
    <div className="product-list">
      <ul>
        {products.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}
