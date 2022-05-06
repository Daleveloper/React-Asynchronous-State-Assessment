import React, { useState } from "react";

function IncrementButtons() {
  const [count, setCount] = useState(0);
  const [lastPressed, setLastPressed] = useState(null);
  const handleClick = (label) => {
    setLastPressed(label);
   
  };
  return (
    <div>
      <h3>Last Pressed: {lastPressed}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => {handleClick("One"); setCount((currentCount) => currentCount + 1)}}>One</button>
      <button onClick={() => {handleClick("Two"); setCount((currentCount) => currentCount + 1); setCount((currentCount) => currentCount + 1)}}>Two</button>
    </div>
  );
}

export default IncrementButtons;
