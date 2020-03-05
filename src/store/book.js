import { useReducer } from "react";
const bookReducer = (state, action) => {
  // console.log("bookreducer ...");
  // console.log(state);
  switch (action.type) {
    case "BOOK_ADD":
      return { ...state, total: state.total + 1 };
    default:
      return state;
  }
};

const BookReducer = () => {
  const [book, dispatch] = useReducer(bookReducer, {
    list: [],
    page: [],
    total: 0
  });

  const addBookAction = () => {
    dispatch({
      type: "BOOK_ADD"
    });
  };
  return { book, addBookAction };
};

export default BookReducer;
