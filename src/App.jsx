import { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <h1 className="title">To-do</h1>
      <TodoForm />

      {
        todoList.length ? (<TodoList list={todoList} />) : (<p className="todo-empty">할 일을 입력해주세요</p>)
      }
    </div>
  );
}
