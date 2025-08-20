import React from "react";
import "./styles/styles.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

export default function App() {
  return (
    <div className="App">
       <h1>React HOC Demo</h1>
      <Comp1 />
      <Comp2 />
    </div>
  );
}