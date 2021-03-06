import React, { createContext, useState, useReducer } from "react";
import bookReducer from "./store/book";

const AppContext = createContext();

const { Provider } = AppContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "BOOK_ADD": // 新增
      return { ...state, list: [action.payload, ...state.list] };
    case "BOOK_DEL": // 删除
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export function AppProvider(props) {
  const { children } = props;
  const [count, setCount] = useState(1);
  const [state, dispatch] = useReducer(reducer, {
    list: [
      {
        id: 1,
        txt: "从你的全世界路过"
      },
      {
        id: 2,
        txt: "三体"
      }
    ]
  });
  const { book, addBookAction } = bookReducer();
  // console.log(book);
  // const [book, dispatchs] = useReducer(bookReducer, {
  //   list: [],
  //   page: 1,
  //   total: 0
  // });
  // const addBookAction = () => {
  //   dispatchs({
  //     type: "BOOK_ADD"
  //   });
  // };
  const addAction = book => {
    dispatch({
      type: "BOOK_ADD",
      payload: book
    });
  };
  const delAction = id => {
    dispatch({
      type: "BOOK_DEL",
      payload: id
    });
  };
  return (
    <Provider
      value={{
        name: "Tom",
        count,
        setCount,
        state,
        addAction,
        delAction,
        addBookAction,
        book
      }}
    >
      {children}
    </Provider>
  );
}

export default AppContext;
