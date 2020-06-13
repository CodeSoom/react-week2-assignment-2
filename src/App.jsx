import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
      todoList: todoList.concat({
        completed: false,
        id: uuidv4(),
        todoText,
      }),
    });
  };
  const deleteTodo = (deleteTodoId) => {
    setState({
      ...state,
      todoList: todoList.filter(({ id }) => id !== deleteTodoId),
    });
  };


  return (
    <div>
      <TodoForm onSubmit={AddTodo} />
      {
        todoList.length
          ? (
            <TodoList
              todoList={todoList}
              onClick={deleteTodo}
            />
          )
          : <div>입력 된 할 일이 없습니다.</div>
      }
    </div>
  );
}
