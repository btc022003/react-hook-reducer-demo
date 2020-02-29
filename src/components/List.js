import React, { useContext } from "react";
import AppContext from "../store";

// 显示列表
function List(props) {
  const {
    state: { list },
    delAction
  } = useContext(AppContext);
  return (
    <ul>
      {list.map(book => (
        <li key={book.id}>
          {book.txt}
          <span onClick={() => delAction(book.id)}>【删除】</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
