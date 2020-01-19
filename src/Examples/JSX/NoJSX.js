import React, { useState } from "react";

const NoJSX = () => {
  const initValue = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const updateCount = value => {
    setCount(value);
    setActionCount(actionCount + 1);
  };

  const handleClickInc = () => updateCount(count + 1);
  const handleClickDec = () => updateCount(count - 1);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", null, "count: ", count),
    React.createElement("div", null, "actions: ", actionCount),
    React.createElement(
      "button",
      {
        onClick: handleClickInc
      },
      "click to inc"
    ),
    React.createElement(
      "button",
      {
        onClick: handleClickDec
      },
      "click to dec"
    )
  );
};

export default NoJSX;
