import React from 'react';
import TodoDeleteButton from './TodoDeleteButton';

function TodoListItem({ sentence, id, handleClickDelete }) {
  return (
    <div>
      {sentence}
      <TodoDeleteButton id={id} handleClickDelete={handleClickDelete} />
    </div>
  );
}

export default TodoListItem;
