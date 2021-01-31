import React from 'react';

import List from './List';
import EmptyList from './EmptyList';

export default function ListController({ isEmptyList, tasks, onClickDeleteTask }) {
  if (isEmptyList) {
    return <EmptyList />;
  }
  return (
    <List
      tasks={tasks}
      onClickDelete={onClickDeleteTask}
    />
  );
}
