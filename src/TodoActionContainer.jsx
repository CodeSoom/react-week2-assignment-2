import React from 'react';
import TodoAction from './TodoAction';

const TodoActionContainer = ({
  todoActions,
  onTodoActionToDone,
}) => todoActions.map((item, index) => (
  <TodoAction key={item} item={item} index={index} handleTodoActionToDone={onTodoActionToDone} />
));

export default TodoActionContainer;
