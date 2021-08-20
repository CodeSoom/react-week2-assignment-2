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
      todo: '',
      todos: [...todos, todo],
    });
  };

  const removeTodo = (index) => {
    todos.splice(index, 1);
    setState({ ...state, todos });
  };

  const handleInput = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddClick = () => {
    addTodo();
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
          onChange={handleInput}
          onClick={handleAddClick}
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
