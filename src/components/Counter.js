import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
  //to increment the counter a first time
   setCount(count => (count+1));
  //to increment the counter a second time
   setCount(count => (count+1))
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
