import React from "react";
import Counter from "./Counter";
import CountSummary from "./CountSummary";

const Component = () => {
  const initValue = Math.floor(Math.random() * 10);

  return (
    <Counter
      initValue={initValue}
      render={countState => <CountSummary {...countState} />}
    />
  );
};

export default Component;
