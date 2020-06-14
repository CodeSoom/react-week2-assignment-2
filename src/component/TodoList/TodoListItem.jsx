import React from 'react';
import TodoDeleteButton from './TodoDeleteButton';

function TodoListItem({ sentence, id, onClickDelete }) {
  return (
    <div>
      {sentence}
      <TodoDeleteButton id={id} onClickDelete={onClickDelete} />
    </div>
  );
}

export default TodoListItem;
