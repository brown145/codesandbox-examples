import React, { useState } from "react";

const withEvenInitValue = initValue => WrappedComponent => props => {
  const [count, setCount] = useState(initValue);
  const [actionCount, setActionCount] = useState(0);

  const updateCount = value => {
    setCount(value);
    setActionCount(actionCount + 1);
  };
  return (
    <WrappedComponent
      count={count}
      actionCount={actionCount}
      onUpdateCount={updateCount}
      {...props}
    />
  );
};

export default withEvenInitValue;
