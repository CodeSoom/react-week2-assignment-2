import React from 'react';

const ListItem = ({ item, index, handleContentDone }) => (
  <div key={item}>
    {item}
    <button type="button" onClick={handleContentDone} value={index}>완료</button>
  </div>
);

export default ListItem;
