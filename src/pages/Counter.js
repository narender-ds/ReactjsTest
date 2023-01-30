import React, { useState, useEffect, useRef,} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let interval = useRef();
  useEffect(() => {
     interval = setInterval(() => {
      if (count >= 20) {
        return;
      }
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  const Increment = () => {
    if (count >= 20) {
      return;
    } 
    clearInterval(interval);
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count === 0) {
      return;
    }
    clearInterval(interval);
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
    clearInterval(interval.current);
  };
  return (
    <div id="container">
      <h1>{count}</h1>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
      <br />
      <br />
      <button onClick={Reset}>Reset</button>
    </div>
  );
};
export default Counter;
