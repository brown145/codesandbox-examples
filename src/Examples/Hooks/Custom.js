import React, { useState } from "react";

const useCounter = initValue => {
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const updateCount = value => {
    setCount(value);
    setActionCount(actionCount + 1);
  };

  return [count, updateCount, actionCount];
};

const Custom = () => {
  const initValue = Math.floor(Math.random() * 10);
  const [count, updateCount, actionCount] = useCounter(initValue);

  const handleClickInc = () => updateCount(count + 1);
  const handleClickDec = () => updateCount(count - 1);

  return (
    <>
      <div>count: {count}</div>
      <div>actions: {actionCount}</div>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default Custom;
