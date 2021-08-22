import React from 'react';

import Item from './Item';

export default function List({ tasks, onClickDelete }) {
  return (
    <ol>
      {tasks.map(task => ( // 배열의 요소를 하나씩 떼어네서 Item에 보낼 것. 
        <Item 
          key={task.id}
          task={task} 
          onClick={onClickDelete} 
        />
      ))}
    </ol>
  );
}
