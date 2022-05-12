import React from 'react';

import TodoAction from './TodoAction';

export default function TodoActionContainer({
  todoActions, onTodoDone,
}) {
  return todoActions.map((todoAction, index) => (
    <TodoAction
      key={`${todoAction}.${String(index)}`}
      index={index}
      todoAction={todoAction}
      onTodoDone={onTodoDone}
    />
  ));
}
