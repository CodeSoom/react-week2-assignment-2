import React from 'react';

import List from './List';

function UnOrderList({ onClick, toDos, id }) {
  return (
    <ul>
      {toDos[0] === undefined
        ? (<h3>할 일이 없어요!</h3>)
        : (
          <List
            onClick={onClick}
            toDos={toDos}
            key={id}
          />
        )}
    </ul>
  );
}

export default UnOrderList;
