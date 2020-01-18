import React, { useReducer } from "react";

const init = ({ count = 0, actionCount = 0 }) => ({
  count,
  actionCount
});

const reducer = (state, action) => {
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

const Effect = () => {
  const initValue = Math.floor(Math.random() * 10);
  const [state, dispatch] = useReducer(reducer, { count: initValue }, init);

  const handleClickInc = () => dispatch({ type: "inc" });
  const handleClickDec = () => dispatch({ type: "dec" });

  return (
    <>
      <div>count: {state.count}</div>
      <div>actions: {state.actionCount}</div>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default Effect;
