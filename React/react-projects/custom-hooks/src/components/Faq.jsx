import React, { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function FAQ() {
    const [open, toggleFunction] = useToggle(false)

  return (
    <div>
      <button onClick={toggleFunction}>
        {open ? "Hide Answer" : "Show Answer"}
      </button>

      {open && <p>This is the answer to the FAQ question.</p>}
    </div>
  );
}
