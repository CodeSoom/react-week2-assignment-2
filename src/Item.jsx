import React from 'react';

export default function Item({ task : { id, title } }) {
  return (
    <div>
      <li>
        {id} 
        - 
        {title}
      </li>
    </div>
  );
}
