import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState([]);

  function onClickSubmit(e) {
    e.preventDefault();
    setTodo((prev) => ([...prev, e.target[0].value]));
    // input 초기화();
  }

  function onClickFinish(target) {
    setTodo((prevTodo) => prevTodo.filter((prev) => prev !== target));
  }

  return (
    <>
      <TodoInput handleSubmit={onClickSubmit} />
      <TodoList todoList={todo} onClick={onClickFinish} />
    </>
  );
}
