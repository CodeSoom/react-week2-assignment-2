import React from 'react';
import AddTodoInputForm from '../component/AddTodoInputForm';
import EntireTodoListView from '../component/EntireTodoListView';

function Page({
  todos,
  inputSentence,
  handleChangeInputSentence,
  handleClickAdd,
  handleClickDelete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <AddTodoInputForm
        inputSentence={inputSentence}
        handleChangeInputSentence={handleChangeInputSentence}
        handleClickAdd={handleClickAdd}
      />
      <EntireTodoListView todos={todos} handleClickDelete={handleClickDelete} />
    </div>
  );
}

export default Page;
