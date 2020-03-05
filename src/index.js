import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./store";
import List from "./components/List";
import Add from "./components/Add";
import "./index.css";
import Demo from "./components/Demo";

ReactDOM.render(
  <AppProvider>
    <List />
    <Add />
    <Demo />
  </AppProvider>,
  document.getElementById("root")
);
