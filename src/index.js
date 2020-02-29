import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./store";
import List from "./components/List";
import Add from "./components/Add";
import "./index.css";

ReactDOM.render(
  <AppProvider>
    <List />
    <Add />
  </AppProvider>,
  document.getElementById("root")
);
