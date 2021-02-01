import React from 'react';

import Button from './button';

export default function Todoilst({
  todos, onCompleteClick,
}) {
  return (
    <ol>
      {
        !todos.length
          ? <div>할 일이 없어요!</div>
          : todos.map(({ title, index }) => (
            <li key={index} Style="margin-top:10px">
              .
              {title}
              <Button
                text="완료"
                onClick={() => onCompleteClick(index)}
              />
            </li>
          ))
      }
    </ol>
  );
}
