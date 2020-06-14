import React, { useState } from 'react';

import TodoInputBox from './TodoInputBox';
import TodoList from './TodoList';


export default function TodoContainer() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  function updateTodoInput({ target }) {
    setTodoInput(target.value);
  }

  function appendTodo() {
    if (todoInput === '') {
      return;
    }
    setTodoList([
      ...todoList,
      {
        id: `${(new Date()).getTime()}`,
        content: todoInput,
      },
    ]);
    setTodoInput('');
  }

  function removeTodo({ target }) {
    const { todoId } = target.dataset;
    const nextTodolList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(nextTodolList);
  }

  return (
    <div>
      <h1>To-Do</h1>
      <TodoInputBox
        todoInput={todoInput}
        updateTodoInput={updateTodoInput}
        appendTodo={appendTodo}
      />
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
      />
    </div>
  );
}
