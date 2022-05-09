import React from 'react';
import ListItem from './ListItem';

const List = ({ list, handleContentDone }) => list.map((item, index) => (
  <ListItem key={item} item={item} index={index} handleContentDone={handleContentDone} />
));

export default List;
