import { useState } from 'react';

import TodoList from './TodoList';

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: '아무것도 하지 않기11',
    },
  ]);

  return (
    <div className="container">
      <h1 className="title">To-do</h1>
      <form className="todo-form">
        <input type="text" className="todo-input" />
        <button type="submit" className="todo-submit">추가</button>
      </form>

      <TodoList list={todoList} />
    </div>
  );
}
