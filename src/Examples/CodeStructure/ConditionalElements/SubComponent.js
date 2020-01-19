import React, { useState } from "react";

const initValue = Math.floor(Math.random() * 10);

const CountSubText = ({ isRevealed, count }) => {
  const isCountEven = count % 2 === 0;
  if (isRevealed) {
    return isCountEven ? <span>even</span> : <span>odd</span>;
  }
  return null;
};
const ActionSubText = ({ actionsRemaining, canAct }) =>
  canAct ? (
    <span>{actionsRemaining} actions remainng</span>
  ) : (
    <span>out of actions</span>
  );

const ActionButtons = ({ canAct, onInc, onDec }) =>
  canAct ? (
    <>
      <button key="inc" onClick={onInc}>
        inc
      </button>
      <button key="dec" onClick={onDec}>
        dec
      </button>
    </>
  ) : null;

const ExtraButtons = ({ canAct, onReset }) =>
  !canAct ? (
    <button key="extra1" onClick={onReset}>
      reset
    </button>
  ) : null;

const SubComponent = () => {
  const actionCountLimit = 3;
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

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
        count: {count} <CountSubText isRevealed={!canAct} count={count} />
      </div>
      <div>
        actions: {actionCount}{" "}
        <ActionSubText canAct={canAct} actionsRemaining={actionsRemaining} />
      </div>
      <ActionButtons
        canAct={canAct}
        onInc={handleClickInc}
        onDec={handleClickDec}
      />
      <ExtraButtons canAct={canAct} onReset={handleClickReset} />
    </>
  );
};

export default SubComponent;
