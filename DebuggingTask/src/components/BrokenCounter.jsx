import { useState, useEffect } from "react";

function BrokenCounter() {
  const [count, setCount] = useState(); //  not initialized
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 5) {
      setMessage("Count is greater than 5");
    }
  }, []); //  missing dependency

  const increment = () => {
    setCount(count + 1); //  unsafe update
  };

  const decrement = () => {
    if (count >= 0) {
      setCount(count - 1); //  goes negative
    }
  };

  return (
    <div>
      <h2>Broken Counter</h2>
      <p>Count: {count}</p>
      <p>{message}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default BrokenCounter;
