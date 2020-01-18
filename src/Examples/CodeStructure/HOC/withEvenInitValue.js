import React from "react";

const withEvenInitValue = WrappedComponent => props => {
  const initValue = Math.floor(Math.random() * 5) * 2;
  return <WrappedComponent initValue={initValue} {...props} />;
};

export default withEvenInitValue;
