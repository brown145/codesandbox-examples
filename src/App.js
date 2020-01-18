import React from "react";
import EffectHook from "./Examples/Hooks/Effect";
import ReducerExample from "./Examples/Hooks/Reducer";

export default function App() {
  return (
    <>
      <h1>Examples</h1>
      <h2>Hooks</h2>
      <h3>useEffect</h3>
      <EffectHook />
      <h3>useReducer</h3>
      <ReducerExample />
    </>
  );
}
