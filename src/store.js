import React, { createContext, useReducer } from "react";
import bookReducer from "./store/Book";

export const AppContext = createContext();
const { Provider } = AppContext;

function Store(props) {
  const {
    book,
    addBookCountAction,
    addBookAction,
    loadDataAction
  } = bookReducer();
  return (
    <Provider
      value={{
        books: book,
        addAction: addBookCountAction,
        addBookAction,
        loadDataAction
      }}
    >
      {props.children}
    </Provider>
  );
}

export default Store;
