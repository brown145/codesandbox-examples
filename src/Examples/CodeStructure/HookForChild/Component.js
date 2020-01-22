import React from "react";
import useIncButton from "./useIncButton";

const HookForChild = () => {
  const [countA, IncButtonA, setCountA] = useIncButton();
  const [countB, IncButtonB, setCountB] = useIncButton();

  const handleReset = () => {
    setCountA(0);
    setCountB(0);
  };

  return (
    <>
      <div>
        <span>count A: {countA}</span>
        &nbsp;
        <IncButtonA />
      </div>
      <div>
        <span>count B: {countB}</span>
        &nbsp;
        <IncButtonB />
      </div>
      <button onClick={handleReset}>reset</button>
      <div>Sum: {countA + countB}</div>
    </>
  );
};

export default HookForChild;
