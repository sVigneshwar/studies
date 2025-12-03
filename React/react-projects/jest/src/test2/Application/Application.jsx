import React from 'react'

export default function Application() {
  return (
    <div>
        <h1>Application Form</h1>
        <h2>section 1</h2>
        <p>all fields are mandatory</p>
        <span title='close'>X</span>
        <div data-testid="custom-element">Custom html</div>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='fullname' value="Vicky" onChange={()=>{}} />
        </div>
        <div>
            <label htmlFor="name">Bio</label>
            <input type="text" name="bio" id="bio" />
        </div>
        <div>
            <label htmlFor="select">Name</label>
            <select name="select" id="select">
                <option value="select">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>
        <div>
            <label htmlFor="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                terms checkbox
            </label>
        </div>
      
    <button>Submit</button>
    </div>
  )
}
