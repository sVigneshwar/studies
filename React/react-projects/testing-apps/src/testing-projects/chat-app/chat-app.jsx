import React, { useState } from 'react'

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com', message: ""},
  {id: 1, name: 'Alice', email: 'alice@mail.com', message: ""},
  {id: 2, name: 'Bob', email: 'bob@mail.com', message: ""},
];

export default function ChatApp() {
    const [message, setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault()
    }

  return (
    <>
    <div className='chat-main'>
        <div className='chat-lhs'>
            <ul>
                {contacts.map(val => {
                    return (
                        <li key={val.id}>{val.name}</li>
                    )
                })}
            </ul>
        </div>
        <div className='chat-rhs'>
            <form onSubmit={handleSubmit}>
                <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}
