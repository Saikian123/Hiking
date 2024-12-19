import { useState } from "react";
import './Task10.css'; // Import the external CSS file

const Task10 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 0 ? setCount(count - 1) : "";
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <p className="counter-value">Value: {count}</p>
      <div className="button-container">
        <button className="counter-button" onClick={increment}>+</button>
        <button className="counter-button" onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Task10;
