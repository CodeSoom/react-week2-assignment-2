import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TodoList from './TodoList';

function Page({
  todo, todoList, onChange, onClick, onClickRemove,
}) {
  return (
    <div>
      <p>To-do</p>
      <Input
        todo={todo}
        onChange={onChange}
        onClick={onClick}
      />
      <TodoList
        todoList={todoList}
        onClickRemove={onClickRemove}
      />
    </div>
  );
}

Page.propTypes = {
  todo: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default Page;
