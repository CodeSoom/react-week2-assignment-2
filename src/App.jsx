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

  const removeTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setState({ ...state, todos: newTodos });
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
          onCompleteButtonClick={removeTodo}
        />
      </p>
    </div>
  );
}
