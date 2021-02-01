import React from 'react';

import ListItem from './ListItem';

function List({ list, onClickComplete }) {
  return (
    list.length === 0 ? <p>할 일이 없어요!</p>
      : (
        <ol>
          {list.map((item) => (
            <li key={item.id}>
              <ListItem item={item} onClickComplete={onClickComplete} />
            </li>
          ))}
        </ol>
      )
  );
}

export default List;
