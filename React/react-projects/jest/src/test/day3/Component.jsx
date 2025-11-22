import React, { useState } from 'react'

export default function Component() {
    const [details, setDetails] = useState(false)
    const [form, setForm] = useState(true)

    const handleSubmit = (e) => {
      e.preventDefault()
      setForm(!form)
    }
  return (
    <div>
      <h2>Form</h2>
      {form && <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' />
        <label htmlFor="age">Age</label>
        <input type="text" id='age' />
        <button type='submit'>submit</button>
      </form>
      </>}
      {!form && <p>Submitted</p>}
      <h2>Toggle</h2>
      <button onClick={() => setDetails(!details)}>Show Details</button>
      {details && <p>Details content</p>}
      <h2>Dropdown</h2>
      <select name="" id="">
        <option value="india">india</option>
        <option value="usa">usa</option>
        <option value="germany">germany</option>
      </select>
    </div>
  )
}
