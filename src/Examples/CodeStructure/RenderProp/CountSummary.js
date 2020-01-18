import React from "react";

const CountSummary = ({ actionCount, count }) => (
  <>
    <div>count: {count}</div>
    <div>actions: {actionCount}</div>
  </>
);

export default CountSummary;
