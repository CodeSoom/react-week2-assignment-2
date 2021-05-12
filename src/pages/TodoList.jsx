/* eslint-disable react/prop-types */
import React from 'react';
import InputTodo from '../components/inputTodo';
import ToDoItems from '../components/todoItems';

function ToDoList({ toDoList, onClickAdd, onClickDone }) {
  return (
    <div>
      <h1>To-do</h1>
      <InputTodo onClick={onClickAdd} />
      <ToDoItems toDoList={toDoList} onClick={onClickDone} />
    </div>
  );
}

export default ToDoList;
