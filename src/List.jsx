import React from 'react';
import ListItem from './ListItem';

const List = ({ list, handleContentDone }) => (list.length === 0 ? (
  <p>할 일이 없어요!</p>
) : list.map((item, index) => (
  <ListItem key={item} item={item} index={index} handleContentDone={handleContentDone} />
)));

export default List;
