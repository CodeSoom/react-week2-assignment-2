import { useState } from 'react';

import TodoList from './TodoList';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <h1 className="title">To-do</h1>
      <form className="todo-form">
        <input type="text" className="todo-input" />
        <button type="submit" className="todo-submit">추가</button>
      </form>

      {
        todoList.length ? (<TodoList list={todoList} />) : (<p className="todo-empty">할 일을 입력해주세요</p>)
      }
    </div>
  );
}
