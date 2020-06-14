import React from 'react';
import TodoInputForm from './AddTodoInputForm/TodoInputForm';
import TodoAddButton from './AddTodoInputForm/TodoAddButton';

function AddTodoInputForm({ inputSentence, handleChangeInputSentence, handleClickAdd }) {
  return (
    <p>
      <TodoInputForm
        inputSentence={inputSentence}
        handleChangeInputSentence={handleChangeInputSentence}
      />
      <TodoAddButton handleClickAdd={handleClickAdd} />
    </p>
  );
}

export default AddTodoInputForm;
