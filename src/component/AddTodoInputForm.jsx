import React from 'react';
import TodoInputForm from './AddTodoInputForm/TodoInputForm';
import TodoAddButton from './AddTodoInputForm/TodoAddButton';

function AddTodoInputForm({ inputSentence, onChangeInputSentence, onClickAdd }) {
  return (
    <p>
      <TodoInputForm
        inputSentence={inputSentence}
        onChangeInputSentence={onChangeInputSentence}
      />
      <TodoAddButton onClickAdd={onClickAdd} />
    </p>
  );
}

export default AddTodoInputForm;
