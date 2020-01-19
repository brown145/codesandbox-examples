import React, { useState } from "react";

const FromObjects = () => {
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
    {
      name: "count",
      value: count
    },
    {
      name: "actions",
      value: actionCount
    }
  ];

  const buttons = [
    {
      name: "inc",
      action: handleClickInc,
      text: "click to inc"
    },
    {
      name: "dec",
      action: handleClickDec,
      text: "click to dec"
    }
  ];

  return (
    <>
      {counters.map(({ name, value }) => (
        <div key={`${name}Counter`}>name: {value}</div>
      ))}
      {buttons.map(({ action, name, text }) => (
        <button key={name} onClick={action}>
          {text}
        </button>
      ))}
    </>
  );
};

export default FromObjects;
