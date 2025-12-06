import React, { useEffect, useState } from 'react'
import useDebouncing from '../hooks/useDebouncing'

export default function Search2() {
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebouncing(search, 600)

    useEffect(() => {
        console.log("API call Search2:", debouncedSearch);
    }, [debouncedSearch])
        
  return (
    <>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search 2' />
    </>
  )
}
