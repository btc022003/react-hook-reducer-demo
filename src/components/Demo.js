import React, { useContext } from "react";
import AppContext from "../store";

function Demo() {
  const { book, addBookAction } = useContext(AppContext);
  return (
    <div>
      <p>{book.total}</p>
      <button onClick={() => addBookAction()}>book</button>
    </div>
  );
}

export default Demo;
