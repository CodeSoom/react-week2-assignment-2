import { useState } from 'react';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Date.now(),
        content: e.target['new-todo'].value,
      },
    ]);

    e.target['new-todo'].value = '';
  };

  const handleComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>To-do</h1>
      <AddTodoForm onSubmit={addTodo} />
      <br />
      <TodoList todos={todos} handleComplete={handleComplete} />
    </>
  );
};

export default App;
