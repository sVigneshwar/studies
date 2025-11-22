import React, { useState } from "react";

export default function Bonus() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Dashboard</h1>

      <input 
        placeholder="Enter text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setText("")}>Clear</button>

      <p>You typed: {text}</p>
    </div>
  );
}
