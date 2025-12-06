import React, { useState } from 'react'
import useInput from '../hooks/useInput'

export default function Form() {
    const {value:firstname, onChange:firstnameOnchange, reset:firstnameReset, error:firstnameError} = useInput("")
    const {value:lastname, onChange:lastnameOnchange, reset:lastnameReset, error:lastnameError} = useInput("")

    const submitHandler = (e) => {
        e.preventDefault()
        firstnameReset()
        lastnameReset()
    }
  return (
    <>
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="firstname">firstname</label>
            <input type="text" id="firstname" value={firstname} onChange={firstnameOnchange} />
            {firstnameError && <p>Error: {firstnameError}</p>}
        </div>
        <div>
            <label htmlFor="lastname">lastname</label>
            <input type="text" id="lastname" value={lastname} onChange={lastnameOnchange} />
            {lastnameError && <p>Error: {lastnameError}</p>}
        </div>
        <button>Submit</button>
    </form>
    </>
  )
}
