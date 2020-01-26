import React from "react";
import CustomHook from "./Examples/Hooks/Custom";
import EffectHook from "./Examples/Hooks/Effect";
import ReducerHook from "./Examples/Hooks/Reducer";
import StateHook from "./Examples/Hooks/State";
import HOC from "./Examples/CodeStructure/HOC/Component";
import Container from "./Examples/CodeStructure/Container/Container";
import RenderProp from "./Examples/CodeStructure/RenderProp/Component";
import FromJSXArray from "./Examples/CodeStructure/ElementList/FromJSXArray";
import FromObjects from "./Examples/CodeStructure/ElementList/FromObjects";
import NoJSX from "./Examples/JSX/NoJSX.js";
import LogicalAnd from "./Examples/CodeStructure/ConditionalElements/LogicalAnd.js";
import Ternary from "./Examples/CodeStructure/ConditionalElements/Ternary";
import RenderVariable from "./Examples/CodeStructure/ConditionalElements/RenderVariable";
import SubRenderFunc from "./Examples/CodeStructure/ConditionalElements/SubRenderFunc";
import SubComponent from "./Examples/CodeStructure/ConditionalElements/SubComponent";
import HookForChild from "./Examples/CodeStructure/HookForChild/Component";
import Context from "./Examples/StateMgmt/Context/Component";
import SimpleContext from "./Examples/StateMgmt/SimpleContext/Component";
import Redux from "./Examples/StateMgmt/Redux/Component";

export default function App() {
  return (
    <>
      <h1>Let me count the ways - Examples</h1>

      <h2>Context</h2>
      <h3>Simple</h3>
      <SimpleContext />
      <h3>Context</h3>
      <Context />

      <h2>Redux</h2>
      <Redux />

      <h2>Conditional Render</h2>
      <h3>Logical And</h3>
      <LogicalAnd />
      <h3>Ternary</h3>
      <Ternary />
      <h3>Render Variable</h3>
      <RenderVariable />
      <h3>Sub Render Function</h3>
      <SubRenderFunc />
      <h3>Sub Comonent</h3>
      <SubComponent />

      <h2>Child from hook</h2>
      <HookForChild />

      <h2>Container Pattern</h2>
      <Container />

      <h2>Higher Order Comonent</h2>
      <HOC />

      <h2>Render Prop</h2>
      <RenderProp />
      <h2>Array of Elements</h2>
      <FromJSXArray />
      <h2>Array of Key/Values</h2>
      <FromObjects />
      <h2>Hooks</h2>
      <h3>custom hook</h3>
      <CustomHook />
      <h3>useEffect</h3>
      <EffectHook />
      <h3>useReducer</h3>
      <ReducerHook />
      <h3>useState</h3>
      <StateHook />
      <h2>JSX</h2>
      <h3>useState</h3>
      <NoJSX />
    </>
  );
}
