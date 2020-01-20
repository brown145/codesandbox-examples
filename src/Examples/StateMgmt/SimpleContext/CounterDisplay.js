import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const CounterDisplay = () => {
  const { count, actionCount } = useContext(CounterContext);

  return (
    <>
      <div>count: {count}</div>
      <div>actions: {actionCount}</div>
    </>
  );
};

export default CounterDisplay;
