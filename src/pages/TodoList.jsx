import React from 'react';
import PropTypes from 'prop-types';

import InputTodo from '../components/InputToDo';
import ToDoItems from '../components/ToDoItems';

function ToDoList({
  toDos, onClickAdd, onClickDone, inputValue, inputOnChanged,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <InputTodo onClick={onClickAdd} value={inputValue} onChanged={inputOnChanged} />
      <ToDoItems toDos={toDos} onClick={onClickDone} />
    </div>
  );
}

ToDoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickDone: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputOnChanged: PropTypes.func.isRequired,
};

export default ToDoList;
