import React from "react";
import CustomHook from "./Examples/Hooks/Custom";
import EffectHook from "./Examples/Hooks/Effect";
import ReducerHook from "./Examples/Hooks/Reducer";
import StateHook from "./Examples/Hooks/State";
import HOC from "./Examples/CodeStructure/HOC/Component";
import Container from "./Examples/CodeStructure/Container/Container";
import RenderProp from "./Examples/CodeStructure/RenderProp/Component";

export default function App() {
  return (
    <>
      <h1>Let me count the ways - Examples</h1>
      <h2>Container Pattern</h2>
      <Container />
      <h2>Higher Order Comonent</h2>
      <HOC />
      <h2>Render Prop</h2>
      <RenderProp />
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
