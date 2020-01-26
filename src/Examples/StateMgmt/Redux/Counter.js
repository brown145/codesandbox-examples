import React from "react";
import { useDispatch, useSelector } from "react-redux";

const State = () => {
  const count = useSelector(state => state.count);
  const actionCount = useSelector(state => state.actionCount);
  const dispatch = useDispatch();

  const handleClickInc = () => dispatch({ type: "inc" });
  const handleClickDec = () => dispatch({ type: "dec" });

  return (
    <>
      <div>count: {count}</div>
      <div>actions: {actionCount}</div>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default State;
