import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input value={text} label="First input" onUpdate={setText} />
      <Input value={text} label="Second input" onUpdate={setText} />
    </>
  );
}

function Input({ label, value, onUpdate }) {
  

  

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={e => onUpdate(e.target.value)}
      />
    </label>
  );
}
