import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const CounterActions = () => {
  const { count, actionCount, setCount, setActionCount } = useContext(
    CounterContext
  );

  const updateCount = value => {
    setCount(value);
    setActionCount(actionCount + 1);
  };

  const handleClickInc = () => updateCount(count + 1);
  const handleClickDec = () => updateCount(count - 1);

  return (
    <>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default CounterActions;
