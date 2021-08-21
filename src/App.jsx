import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    todo: '',
    todos: [],
  });

  const { todo, todos } = state;

  const setTodoText = (value) => {
    setState({ ...state, todo: value });
  };

  const addTodo = () => {
    setState({
      ...state,
      todo: '',
      todos: [...todos, todo],
    });
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setState({ ...state, todos: newTodos });
  };

  const handleCompleteClick = (index) => {
    removeTodo(index);
  };

  return (
    <div>
      <p>To-do</p>
      <p>
        <TodoInput
          todo={todo}
          onChange={setTodoText}
          onClick={addTodo}
        />
      </p>
      <p>
        <TodoList
          todos={todos}
          handleCompleteClick={handleCompleteClick}
        />
      </p>
    </div>
  );
}
