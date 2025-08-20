import React from "react";
import { forwardRef } from "react";
import WithDimension from "../hoc/WithDimension";
const Comp2 = (props, ref) => {
  // return (
  //   // enter your code here
  //   <>
  //   <h1>Comp 2</h1>
  //   </>
  // );
    return <h1>Component 2 – Width: {props.width}, Height: {props.height}</h1>;
};

export default WithDimension(forwardRef(Comp2));
