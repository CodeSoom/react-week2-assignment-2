import { useState } from 'react';

function useTodos(initialTodos = []) {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todo) => {
    todos.find((todoItem) => todoItem.equals(todo));
    setTodos([...todos, todo]);
  };

  const removeTodo = (...ids) => {
    setTodos(todos.filter((todo) => !ids.includes(todo.id)));
  };

  return { todos, addTodo, removeTodo };
}

export default useTodos;
