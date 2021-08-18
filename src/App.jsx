import React, { useState } from 'react';
import Title from './Title';
import InputTodo from './InputTodo';
import AddButton from './AddButton';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    inputText: '',
    todoList: [],
  });

  const { inputText, todoList } = state;

  function handleInputTodo(e) {
    setState({
      ...state,
      inputText: e.target.value,
    });

    console.log(inputText);
  }

  function handleAddTodo() {
    setState({
      todoList: [...todoList, {
        text: inputText,
      }],
      inputText: '',
    });

    console.log(todoList);
  }

  return (
    <div>
      <Title />
      <InputTodo onChange={(e) => handleInputTodo(e)} />
      <AddButton todoList={todoList} onClick={() => handleAddTodo()} />
      <TodoList />
    </div>
  );
}
