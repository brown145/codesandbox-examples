import React from "react";

const CounterStateContext = React.createContext();
const CounterDispatchContext = React.createContext();

const counterReducer = (state, action) => {
  let { count, actionCount } = state;

  switch (action.type) {
    case "inc":
      count = state.count + 1;
      break;
    case "dec":
      count = state.count - 1;
      break;
    default:
    // no-op
  }

  if (count !== state.count) {
    actionCount = actionCount + 1;
  }

  return {
    ...state,
    count,
    actionCount
  };
};

const CounterProvider = ({ initValue = 0, children }) => {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: initValue,
    actionCount: 0
  });

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
};

const useCounterState = () => {
  const context = React.useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
};

const useCounterDispatch = () => {
  const context = React.useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
};

const useCounter = () => {
  return [useCounterState(), useCounterDispatch()];
};

export { CounterProvider, useCounter, useCounterState, useCounterDispatch };
