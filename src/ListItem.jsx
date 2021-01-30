import React from 'react';

function ListItem({content:{id,content}, onComplete}) {

  return (
    
    <li>
    {content}

    <button type="button" onClick={()=>onComplete(id)}>
      완료
    </button>

    </li>
    
  )
}


export default ListItem;