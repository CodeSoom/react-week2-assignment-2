import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// useRef는 새로운 객체가 추가될 때마다 id값을 이용해 구분해주기 위해 사용한다.
// useCallback은 렌더링이 될 때마다 새로운 함수를 만드는 것이 아니라 한번 함수를 만들고 재사용할 수 있도록 해주기 위해서다.

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할 일"
    },
    {
      id: 2,
      text: "할 일2"
    },
    {
      id: 3,
      text: "할 일3"
    }
  ]);

  const nextId = useRef(4);

  // useRef는 새로운 객체가 추가될 때마다 id값을 이용해 구분해주기 위해 사용한다.
  // useCallback은 렌더링이 될 때마다 새로운 함수를 만드는 것이 아니라 한번 함수를 만들고 재사용할 수 있도록 해주기 위해서다.
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
