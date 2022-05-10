import React from 'react';

import TodoAction from './TodoAction';

const TodoActionContainer = ({
  todoActions,
  onTodoActionToDone,
}) => todoActions.map((todoAction, index) => (
  <TodoAction
    key={`${todoAction}.${String(index)}`}
    index={index}
    todoAction={todoAction}
    handleTodoActionToDone={onTodoActionToDone}
  />
));

export default TodoActionContainer;
