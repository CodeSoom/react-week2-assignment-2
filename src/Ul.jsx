import React from 'react';

import List from './List';

export default ({ list }) => (
  <ul>
    {list.map((item, index) => (
      <List todo={item} index={index} key={item} />
    ))}
  </ul>
);
