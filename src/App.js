import React from "react";
import CustomHook from "./Examples/Hooks/Custom";
import EffectHook from "./Examples/Hooks/Effect";
import ReducerHook from "./Examples/Hooks/Reducer";
import StateHook from "./Examples/Hooks/State";

export default function App() {
  return (
    <>
      <h1>Examples</h1>
      <h2>Hooks</h2>
      <h3>custom hook</h3>
      <CustomHook />
      <h3>useEffect</h3>
      <EffectHook />
      <h3>useReducer</h3>
      <ReducerHook />
      <h3>useState</h3>
      <StateHook />
    </>
  );
}
