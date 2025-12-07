import React, { useState } from "react";

export default function Multiplier({ calculate }) {
  const [value, setValue] = useState(2);

  const handleClick = () => {
    const newValue = calculate(value); // RETURN VALUE REQUIRED
    setValue(newValue);
  };

  return (
    <div>
      <h1 data-testid="value">{value}</h1>
      <button onClick={handleClick}>Multiply</button>
    </div>
  );
}
