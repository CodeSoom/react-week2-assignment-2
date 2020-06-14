import React from 'react';
import AddTodoInputForm from '../component/AddTodoInputForm';
import TodoList from '../component/TodoList';

function Page({
  todos, inputSentence, onChangeInputSentence, onClickAdd, onClickDelete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <AddTodoInputForm
        inputSentence={inputSentence}
        onChangeInputSentence={onChangeInputSentence}
        onClickAdd={onClickAdd}
      />
      <TodoList todos={todos} onClickDelete={onClickDelete} />
    </div>
  );
}

export default Page;
