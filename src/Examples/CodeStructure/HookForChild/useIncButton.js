import React, { useState } from "react";

const useIncButton = () => {
  const initValue = Math.floor(Math.random() * 10);
  const [count, setCount] = useState(initValue);

  const handleClickInc = () => setCount(count + 1);

  const IncButton = () => (
    <button onClick={handleClickInc}>click to inc</button>
  );

  return [count, IncButton, setCount];
};

export default useIncButton;
