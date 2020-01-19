import React, { useState } from "react";

const initValue = Math.floor(Math.random() * 10);

const RenderVariable = () => {
  const actionCountLimit = 3;

  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const isCountEven = count % 2 === 0;
  const actionsRemaining = actionCountLimit - actionCount;
  const canAct = actionsRemaining > 0;

  const resetCount = () => {
    setCount(initValue);
    setActionCount(0);
  };

  const updateCount = value => {
    if (canAct) {
      setCount(value);
      setActionCount(actionCount + 1);
    }
  };

  const handleClickInc = () => updateCount(count + 1);
  const handleClickDec = () => updateCount(count - 1);
  const handleClickReset = () => resetCount();

  let countSubText = null;
  if (!canAct) {
    countSubText = isCountEven ? <span>even</span> : <span>odd</span>;
  }

  const actionSubText = canAct ? (
    <span>{actionsRemaining} actions remainng</span>
  ) : (
    <span>out of actions</span>
  );

  const actionButtons = canAct
    ? [
        <button key="inc" onClick={handleClickInc}>
          inc
        </button>,
        <button key="dec" onClick={handleClickDec}>
          dec
        </button>
      ]
    : null;

  const extraButtons = !canAct
    ? [
        <button key="extra1" onClick={handleClickReset}>
          reset
        </button>
      ]
    : null;

  return (
    <>
      <div>
        count: {count} {countSubText}
      </div>
      <div>
        actions: {actionCount} {actionSubText}
      </div>
      {actionButtons}
      {extraButtons}
    </>
  );
};

export default RenderVariable;
