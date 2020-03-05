import React, { useContext } from "react";
import { AppContext } from "../store";

function Counter() {
  const {
    book: { books, addAction }
  } = useContext(AppContext);
  // console.log(context);
  return (
    <div>
      <h1>计数器-{books.count}</h1>
      <button onClick={() => addAction()}>Plus</button>
    </div>
  );
}

export default Counter;
