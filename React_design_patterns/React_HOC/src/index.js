import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Old way (removed in React 18+ ❌)
// ReactDOM.render(<App />, document.getElementById("root"));

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
