import React from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function Page({
  textInput,
  toDoArray,
  onTextChange,
  onAddButtonClick,
  onCompleteButtonClick,
}) {
  return (
    <>
      <h1>To-do</h1>
      <ToDoForm
        textInput={textInput}
        onTextChange={onTextChange}
        onAddButtonClick={onAddButtonClick}
      />
      <ToDoList
        toDoArray={toDoArray}
        onCompleteButtonClick={onCompleteButtonClick}
      />
    </>
  );
}

export default Page;
