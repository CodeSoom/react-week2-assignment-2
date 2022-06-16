import { useState } from 'react';

import TodoItems from './TodoItems';
import TodoForm from './TodoForm';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="container">
      <h1 className="title">To-do</h1>
      <TodoForm />

      {
        todoItems.length ? (<TodoItems todoItems={todoItems} />) : (<p className="todo-empty">할 일을 입력해주세요</p>)
      }
    </div>
  );
}
