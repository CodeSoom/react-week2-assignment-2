import { useState } from 'react';

import Input from './components/Input';
import TodoList from './components/TodoList';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    newTodo: { id: 1, todoName: '' },
  });

  const { todos, newTodo } = state;

  function handleClickCompleteTodo(completedTodo) {
    const updatedTodos = todos.filter((todo) => todo.id !== completedTodo.id);
    setState({
      ...state,
      todos: updatedTodos,
    });
  }

  function handleTypeNewTodo(typedValue) {
    setState({
      ...state,
      newTodo: { ...newTodo, todoName: typedValue },
    });
  }

  function handleClickAddTodo() {
    setState({
      ...state,
      todos: [
        ...todos,
        newTodo,
      ],
      newTodo: { id: newTodo.id + 1, todoName: '' },
    });
  }

  return (
    <>
      <h1>To-do</h1>
      <Input
        onChange={handleTypeNewTodo}
        value={newTodo.todoName}
        onClick={handleClickAddTodo}
      />
      <TodoList
        todos={todos}
        onClick={handleClickCompleteTodo}
      />
    </>
  );
}
