import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input type="checkbox" checked={reverse} onChange={e => setReverse(e.target.checked)} />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key="lastname" label="Last name" /> 
        <Field key="firstname" label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="firstname" label="First name" /> 
        <Field key="lastname" label="Last name" />
        {checkbox}
      </>
    );    
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>{label}:{' '}
      <input type="text" value={text} placeholder={label} onChange={e => setText(e.target.value)} />
    </label>
  );
}
