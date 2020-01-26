import { createStore } from "redux";

const initValue = Math.floor(Math.random() * 10);

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

const store = createStore(reducer, init({ count: initValue }));

export default store;
