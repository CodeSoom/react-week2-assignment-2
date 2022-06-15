import { useState } from 'react';

import useInput from './hooks/useInput';

import TodoList from './pages/TodoList';

export default function App() {
  const [todo, todoHandler, setTodo] = useInput('');
  const [todos, setTodos] = useState([]);

  const createTodo = (contents) => {
    const newTodo = {
      id: window.crypto.getRandomValues(new Uint32Array(1))[0],
      todo: contents,
    };

    setTodos([...todos, newTodo]);

    setTodo('');
  };

  const completionTodo = (id) => {
    const targetTodo = todos.filter((target) => target.id !== id);

    setTodos(targetTodo);
  };

  return (
    <TodoList
      todo={todo}
      todoHandler={todoHandler}
      createTodo={createTodo}
      completionTodo={completionTodo}
      todos={todos}
    />
  );
}
