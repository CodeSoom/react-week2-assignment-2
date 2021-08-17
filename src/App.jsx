import React, { useState } from 'react';
import Title from './Title';
import InputTodo from './InputTodo';
import CreateButton from './CreateButton';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    inputText: '',
    todoList: [],
  });

  const { inputText, todoList } = state;

  function addTodo(todo = 'todotest') {
    setState({
      state: 'add!',
      todoList: ['add!'],
    });
    console.log(todo);
  }

  return (
    <div>
      <Title />
      <InputTodo />
      <CreateButton inputText={inputText} onClick={() => addTodo('todo')} />
      <TodoList />
    </div>
  );
}
