import React, { useState, useContext } from "react";
import AppContext from "../store";

function Add(props) {
  const [txt, setTxt] = useState("");
  const { addAction } = useContext(AppContext); // 把addAction映射进来
  return (
    <ul>
      <li>
        <input onChange={e => setTxt(e.target.value)} type="text" />
      </li>
      <li>
        <button
          onClick={() =>
            addAction({
              id: Date.now(),
              txt
            })
          }
        >
          添加
        </button>
      </li>
    </ul>
  );
}

export default Add;
