import React from 'react';

import Item from './Item';

function List({ todos, onClick }) {
  return (
    <ol>
      {
        todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            onClick={onClick}
          />
        ))
      }
    </ol>
  );
}

export default List;
