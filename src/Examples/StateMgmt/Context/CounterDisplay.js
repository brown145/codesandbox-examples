import React from "react";
import { useCounterState } from "./CounterContext";

const CounterDisplay = () => {
  const { count, actionCount } = useCounterState();

  return (
    <>
      <div>count: {count}</div>
      <div>actions: {actionCount}</div>
    </>
  );
};

export default CounterDisplay;
