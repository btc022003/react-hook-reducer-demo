import React, { useContext, useState } from "react";
import { AppContext } from "../store";

function Counter() {
  const {
    book: { addBookAction }
  } = useContext(AppContext);
  const [name, setName] = useState("");
  // console.log(context);
  return (
    <ul>
      <li>
        <input onChange={e => setName(e.target.value)} />
      </li>
      <li>
        <button
          onClick={() =>
            addBookAction({
              id: Date.now(),
              name
            })
          }
        >
          保存
        </button>
      </li>
    </ul>
  );
}

export default Counter;
