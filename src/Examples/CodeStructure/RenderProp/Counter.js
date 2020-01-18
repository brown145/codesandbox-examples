import React, { useState } from "react";

const Counter = ({ initValue, render }) => {
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const updateCount = value => {
    setCount(value);
    setActionCount(actionCount + 1);
  };

  const handleClickInc = () => updateCount(count + 1);
  const handleClickDec = () => updateCount(count - 1);

  return (
    <>
      {render({ actionCount, count })}
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default Counter;
