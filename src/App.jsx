import React, { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [state, setState] = useState({
    todoList: [],
  });
  const { todoList } = state;

  const AddTodo = (todoText) => {
    setState({
      ...state,
      todoList: todoList.concat(todoText),
    });
  };
  const deleteTodo = (deleteTodoItem) => {
    setState({
      ...state,
      todoList: todoList.filter((todoText) => todoText !== deleteTodoItem),
    });
  };


  return (
    <div>
      <TodoForm onSubmit={AddTodo} />
      <TodoList
        todoList={todoList}
        onClick={deleteTodo}
      />
    </div>
  );
}
