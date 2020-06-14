import React from 'react';
import TodoListItem from './EntireTodoListView/TodoListItem';

function EntireTodoListView({ todos, handleClickDelete }) {
  return (
    <div>
      {
        todos.length !== 0 ? todos.map((i) => (
          <TodoListItem
            key={i.id}
            sentence={i.sentence}
            id={i.id}
            handleClickDelete={handleClickDelete}
          />
        )) : <div>할 일이 없어요!</div>
      }
    </div>
  );
}

export default EntireTodoListView;
