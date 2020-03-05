import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Store from "./store";
import Counter from "./components/Counter";
import List from "./components/List";
import Add from "./components/Add";

ReactDOM.render(
  <Store>
    <h1>Hello World!</h1>
    <Counter />
    <hr />
    <List />
    <Add />
  </Store>,
  document.getElementById("root")
);
