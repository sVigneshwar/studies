import React, {useState} from 'react'

export default function Search() {
    const [value, setValue] = useState("")

    const [result, setResult] = useState("") 
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val)
        setLoading(true)

        clearTimeout(timer)

        var timer = setTimeout(() => {
            setLoading(false)
            setResult(val)            
        }, 500);

        timer;
        
    }

  return (
    <div>
      <input type="text" placeholder='search' value={value} onChange={handleChange} />
      <h4>Search result</h4>
      {loading && <p>Searching...</p>}
      {result && !loading && <p>{result}</p>}
    </div>
  )
}
