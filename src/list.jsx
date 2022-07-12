import React from 'react';
import Button from './button';

function List({ listItem, onClick }) {
  return (
    <ol>
      {listItem.map((todo, index) => (
        <div key={todo + index}>
          <li style={{ display: 'inline' }}>{`${index + 1}. ${todo}`}</li>
          <Button type="button" onClick={() => onClick(index)}>
            완료
          </Button>
        </div>
      ))}
    </ol>
  );
}

export default List;
