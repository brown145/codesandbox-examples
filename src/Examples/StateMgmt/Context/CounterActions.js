import React from "react";
import { useCounterDispatch } from "./CounterContext";

const CounterActions = () => {
  const dispatch = useCounterDispatch();

  const handleClickInc = () => dispatch({ type: "inc" });
  const handleClickDec = () => dispatch({ type: "dec" });

  return (
    <>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default CounterActions;
