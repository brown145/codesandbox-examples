import React, { useState } from "react";

const initValue = Math.floor(Math.random() * 10);

const SubRenderFunc = () => {
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

  const renderCountSubText = () => {
    if (!canAct) {
      return isCountEven ? <span>even</span> : <span>odd</span>;
    }
    return null;
  };

  const renderActionSubText = () =>
    canAct ? (
      <span>{actionsRemaining} actions remainng</span>
    ) : (
      <span>out of actions</span>
    );

  const renderActionButtons = () =>
    canAct ? (
      <>
        <button key="inc" onClick={handleClickInc}>
          inc
        </button>
        <button key="dec" onClick={handleClickDec}>
          dec
        </button>
      </>
    ) : null;

  const renderExtraButtons = () =>
    !canAct ? (
      <button key="extra1" onClick={handleClickReset}>
        reset
      </button>
    ) : null;

  return (
    <>
      <div>
        count: {count} {renderCountSubText()}
      </div>
      <div>
        actions: {actionCount} {renderActionSubText()}
      </div>
      {renderActionButtons()}
      {renderExtraButtons()}
    </>
  );
};

export default SubRenderFunc;
