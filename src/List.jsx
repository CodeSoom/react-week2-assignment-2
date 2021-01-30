import React from 'react';
import ListItem from './ListItem';



function List({list,onComplete}) {

  return (
    list.length === 0 ? <p>할일이 없어요!</p> : 
    <ol>
      {list.map(item => (
      <ListItem key={item.id} content={item} onComplete={onComplete} />
      ))}
      </ol>
  )
}

export default List;