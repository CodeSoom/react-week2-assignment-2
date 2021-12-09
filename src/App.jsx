import { useState } from 'react';

import TodoAppender from './components/TodoAppender';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  function handleAddTodo(todoItemText) {
    const todoItem = {
      id: nextId,
      text: todoItemText,
    };

    setTodos([...todos, todoItem]);
    setNextId(nextId + 1);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoAppender onSubmitAddTodo={handleAddTodo} />
      <Todos todos={todos} onClickDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
