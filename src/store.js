import React, { createContext, useReducer } from "react";
import bookReducer from "./store/Book";

export const AppContext = createContext();
const { Provider } = AppContext;

function Store(props) {
  const book = bookReducer();
  return (
    <Provider
      value={{
        book: { ...book }
      }}
    >
      {props.children}
    </Provider>
  );
}

export default Store;
