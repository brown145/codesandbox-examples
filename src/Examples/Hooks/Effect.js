import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(null);
  const [actionCount, setActionCount] = useState(-1); // Dev Note: useEffect will trigger update to 0

  useEffect(() => {
    setCount(Math.floor(Math.random() * 10));
  }, []);

  useEffect(() => {
    if (count !== null) {
      setActionCount(val => val + 1);
    }
  }, [count]);

  const handleClickInc = () => setCount(count + 1);
  const handleClickDec = () => setCount(count - 1);

  return (
    <>
      <div>count: {count}</div>
      <div>actions: {actionCount}</div>
      <button onClick={handleClickInc}>click to inc</button>
      <button onClick={handleClickDec}>click to dec</button>
    </>
  );
};

export default Effect;
