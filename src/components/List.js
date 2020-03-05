import React, { useContext, useEffect } from "react";
import { AppContext } from "../store";

function Counter() {
  const {
    books: { list },
    loadDataAction
  } = useContext(AppContext);
  useEffect(() => {
    loadDataAction();
  }, []);
  // console.log(context);
  return (
    <div>
      <h1>books列表数据</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
