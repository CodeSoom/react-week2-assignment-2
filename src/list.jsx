import React from 'react';

import OneLine from './oneLine';

export default function List({ todoList, onClickComplete }) {
  return (
    <ol>
      {todoList.map((element, index) => (
        <OneLine
          key={String(index)}
          index={index}
          element={element}
          onClickComplete={onClickComplete}
        />
      ))}
    </ol>
  );
}
