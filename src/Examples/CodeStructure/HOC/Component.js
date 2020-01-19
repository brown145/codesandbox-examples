import React from "react";
import withCounter from "./withCounter";

const initValue = Math.floor(Math.random() * 10);

const Component = ({
  count = 0,
  actionCount = 0,
  onUpdateCount = () => {}
}) => {
  const handleClickInc = () => onUpdateCount(count + 1);
  const handleClickDec = () => onUpdateCount(count - 1);

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
export default withCounter(initValue)(Component);
