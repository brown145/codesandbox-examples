import React from "react";

import { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterActions from "./CounterActions";

const Component = () => {
  const initValue = Math.floor(Math.random() * 10);

  return (
    <CounterProvider initValue={initValue}>
      <CounterDisplay />
      <CounterActions />
    </CounterProvider>
  );
};

export default Component;
