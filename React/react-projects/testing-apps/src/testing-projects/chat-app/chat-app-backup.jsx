import React, { useEffect, useReducer, useState } from 'react'

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com', message: ""},
  {id: 1, name: 'Alice', email: 'alice@mail.com', message: ""},
  {id: 2, name: 'Bob', email: 'bob@mail.com', message: ""},
];

function reducer(data, action){
    switch(action.type){
        case 'updateMessage':
            return data.map(val => {
                if(val.id === action.payload.id){
                    return {...val, message: action.payload.message}
                }else{
                    return val
                }
            })
            
    }
}

export default function ChatApp() {
    const [data, dispatch] = useReducer(reducer, contacts);
    const [active, setActive] = useState(data[0]);

    useEffect(()=>{
        setActive(data.find(val => val.id === active.id))
    }, [data])

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
                        <li key={val.id} onClick={() => setActive(val)}>{val.name}</li>
                    )
                })}
            </ul>
        </div>
        <div className='chat-rhs'>
            <form onSubmit={handleSubmit}>
                <textarea value={active.message} onChange={e => dispatch({type: 'updateMessage', payload: {message: e.target.value, id: active.id}})}></textarea>
                <button type='submit'>Send to {active.name}</button>
            </form>
        </div>
    </div>
    </>
  )
}
