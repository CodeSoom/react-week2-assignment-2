import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [state, setState] = useState({
    todoList: [],
  });
  const { todoList } = state;

  const AddTodo = (text) => {
    setState({
      ...state,
      todoList: todoList.concat({
        id: uuidv4(),
        text,
      }),
    });
  };

  const deleteTodo = (ID) => {
    setState({
      ...state,
      todoList: todoList.filter((todo) => todo.id !== ID),
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
