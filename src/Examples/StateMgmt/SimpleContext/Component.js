import React, { useState } from "react";

import CounterContext from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterActions from "./CounterActions";

const Component = () => {
  const initValue = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const contextValue = {
    count,
    actionCount,
    setCount,
    setActionCount
  };

  return (
    <CounterContext.Provider value={contextValue}>
      <CounterDisplay />
      <CounterActions />
    </CounterContext.Provider>
  );
};

export default Component;
