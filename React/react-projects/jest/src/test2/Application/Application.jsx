import React from 'react'

export default function Application() {
  return (
    <div>
        <h1>Application Form</h1>
        <h2>section 1</h2>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
        </div>
        <div>
            <label htmlFor="name">Bio</label>
            <input type="text" name="bio" id="bio" />
        </div>
        <div>
            <label htmlFor="select">Select</label>
            <select name="select" id="select">
                <option value="select">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>
        <div>
            <label htmlFor="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                Checkbox
            </label>
        </div>
      
    <button>Submit</button>
    </div>
  )
}
