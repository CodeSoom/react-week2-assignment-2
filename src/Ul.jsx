import React from 'react';

import List from './List';

export default ({ list, handleRemove }) => (
  <ul style={{ listStyle: 'none' }}>
    {list.map((item, index) => (
      <List item={item} index={index} key={`${item.id}`} handleRemove={handleRemove} />
    ))}
  </ul>
);
