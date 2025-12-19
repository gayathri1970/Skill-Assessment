import { useState, useEffect } from "react";

function FixedCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 5) {
      setMessage("Count is greater than 5");
    } else {
      setMessage("");
    }
  }, [count]); //  correct dependency

  const increment = () => {
    setCount((prev) => prev + 1); //  safe update
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2>Fixed Counter</h2>
      <p>Count: {count}</p>
      <p>{message}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default FixedCounter;
