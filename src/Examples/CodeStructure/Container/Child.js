import React from "react";

const Child = ({ actionCount, count, onUpdate }) => {
  const handleClickInc = () => onUpdate(count + 1);
  const handleClickDec = () => onUpdate(count - 1);

  return (
    <>
      <div>count: {count}</div>
      <div>actions: {actionCount}</div>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default Child;
