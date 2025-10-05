import React, { useReducer, useState } from 'react';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com', message: '' },
  { id: 1, name: 'Alice', email: 'alice@mail.com', message: '' },
  { id: 2, name: 'Bob', email: 'bob@mail.com', message: '' },
];

function reducer(data, action) {
  switch (action.type) {
    case 'updateMessage':
      return data.map((val) =>
        val.id === action.payload.id
          ? { ...val, message: action.payload.message }
          : val
      );
    case 'resetMessage':
      return data.map((val) =>
        val.id === action.payload.id
          ? { ...val, message: '' }
          : val
        );
    default:
      return data;
  }
}

export default function ChatApp() {
  const [data, dispatch] = useReducer(reducer, contacts);
  const [activeId, setActiveId] = useState(0); // 👈 store only ID

  const active = data.find(val => val.id === activeId); // 👈 derive active contact

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Sent to ${active.name}: ${active.message}`);
    dispatch({type: 'resetMessage', payload: {id: active.id}})
  }

  return (
    <div className='chat-main'>
      <div className='chat-lhs'>
        <ul>
          {data.map((val) => (
            <li
              key={val.id}
              onClick={() => setActiveId(val.id)}
              style={{
                cursor: 'pointer',
                fontWeight: val.id === activeId ? 'bold' : 'normal',
              }}
            >
              {val.name}
            </li>
          ))}
        </ul>
      </div>

      <div className='chat-rhs'>
        <form onSubmit={handleSubmit}>
          <textarea
            value={active.message}
            onChange={(e) =>
              dispatch({
                type: 'updateMessage',
                payload: { id: activeId, message: e.target.value },
              })
            }
          ></textarea>
          <button type='submit'>Send to {active.name}</button>
        </form>
      </div>
    </div>
  );
}
