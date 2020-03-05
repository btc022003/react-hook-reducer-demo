import { useReducer } from "react";

function Book() {
  const [book, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "COUNT_ADD":
          return { ...state, count: state.count + 1 };
        case "BOOK_ADD":
          return { ...state, list: [action.payload, ...state.list] };
        case "LOAD_DATA_END":
          return { ...state, list: action.payload };
        default:
          return state;
      }
    },
    {
      list: [],
      count: 1
    }
  );
  const addBookCountAction = () => {
    dispatch({
      type: "COUNT_ADD"
    });
  };

  const addBookAction = book => {
    dispatch({
      type: "BOOK_ADD",
      payload: book
    });
  };

  const loadDataAction = async () => {
    const result = await fetch(
      "http://api.cat-shop.penkuoer.com/api/v1/products",
      {
        method: "GET"
      }
    );
    const data = await result.json();
    dispatch({
      type: "LOAD_DATA_END",
      payload: data.products
    });
  };
  return { book, addBookCountAction, addBookAction, loadDataAction };
}

export default Book;
