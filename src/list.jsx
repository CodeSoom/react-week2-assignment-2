import React from 'react';
import Button from './button';

function List({ listItem, onClick }) {
  if (listItem.length > 0) {
    return (
      <ol>
        {listItem.map((item) => {
          const id = item.id;

          return (
            <li id={id} key={id}>
              {item.toDo}
              <Button type="button" onClick={() => onClick(id)}>
                완료
              </Button>
            </li>
          );
        })}
      </ol>
    );
  }

  return <p>할 일이 없어요!</p>;
}

export default List;
