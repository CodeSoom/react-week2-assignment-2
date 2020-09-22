import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [state, setState] = useState({
    list: [],
  });
  const { list } = state;
  console.log(list);
  function handleClick(e) {
    e.preventDefault();
    const input = document.getElementById("input");
    const { value } = input;
    input.value = "";
    console.log(value);
    setState({
      list: [...list, value],
    });

    console.log("클릭!");
  }

  function handleClickDeleteList() {
    console.log("삭제");
  }

  return (
    <div>
      <h1>To-do</h1>
      <form>
        <input id="input" type="text" required />
        <button type="submit" onClick={handleClick}>
          추가
        </button>
      </form>
      <ul>
        <li>할일이 없나요?</li>
        <li>
          할일1
          <button type="button" onClick={handleClickDeleteList}>
            종료
          </button>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
