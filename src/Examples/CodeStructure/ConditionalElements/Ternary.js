import React, { useState } from "react";

const initValue = Math.floor(Math.random() * 10);

const Ternary = () => {
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

  return (
    <>
      <div>
        count: {count}&nbsp;
        {!canAct && isCountEven && <span>even</span>}
        {!canAct && !isCountEven && <span>odd</span>}
      </div>
      <div>
        actions: {actionCount}&nbsp;
        {canAct ? (
          <span>{actionsRemaining} actions remainng</span>
        ) : (
          <span>out of actions</span>
        )}
      </div>
      {canAct ? (
        <>
          <button onClick={handleClickInc}>inc</button>
          <button onClick={handleClickDec}>dec</button>
        </>
      ) : (
        <button onClick={handleClickReset}>reset</button>
      )}
    </>
  );
};

export default Ternary;
