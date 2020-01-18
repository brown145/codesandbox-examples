import React, { useState } from "react";
import Child from "./Child";

const Container = () => {
  const initValue = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const updateCount = value => {
    setCount(value);
    setActionCount(actionCount + 1);
  };

  return (
    <Child actionCount={actionCount} count={count} onUpdate={updateCount} />
  );
};

export default Container;
