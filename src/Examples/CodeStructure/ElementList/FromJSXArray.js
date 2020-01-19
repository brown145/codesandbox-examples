import React, { useState } from "react";

const FromJSXArray = () => {
  const initValue = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const updateCount = value => {
    setCount(value);
    setActionCount(actionCount + 1);
  };

  const handleClickInc = () => updateCount(count + 1);
  const handleClickDec = () => updateCount(count - 1);

  const counters = [
    <div key="incCounter">count: {count}</div>,
    <div key="decCounter">actions: {actionCount}</div>
  ];

  const buttons = [
    <button key="inc" onClick={handleClickInc}>
      click to inc
    </button>,
    <button key="dec" onClick={handleClickDec}>
      click to dec
    </button>
  ];

  return (
    <>
      {counters}
      {buttons}
    </>
  );
};

export default FromJSXArray;
