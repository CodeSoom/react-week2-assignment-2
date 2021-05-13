import React from 'react';
import PropTypes from 'prop-types';

import InputTodo from '../components/InputToDo';
import ToDoItems from '../components/ToDoItems';

function ToDoList({ toDos, onClickAdd, onClickDone }) {
  return (
    <div>
      <h1>To-do</h1>
      <InputTodo onClick={onClickAdd} />
      <ToDoItems toDos={toDos} onClick={onClickDone} />
    </div>
  );
}

ToDoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickDone: PropTypes.func.isRequired,
};

export default ToDoList;
