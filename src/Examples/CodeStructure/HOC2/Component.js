import React, { useState } from "react";
import withEvenInitValue from "./withEvenInitValue";

const Component = ({ initValue = 0 }) => {
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
      <div>count: {count}</div>
      <div>actions: {actionCount}</div>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export const naked = Component;
export default withEvenInitValue(Component);
