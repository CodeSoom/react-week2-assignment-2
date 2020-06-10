import React from 'react';

import List from './List';

export default ({ list }) => (
  <ul>{
      console.log(list)
    }
    {list.map((item, index) => (
      <List todo={item} index={index} key={`${index}-${item}`} />
    ))}
  </ul>
);
