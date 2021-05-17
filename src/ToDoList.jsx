import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';

import Task from './Task';

export default function ToDoList({ items, onClick }) {
  if (R.isEmpty(items)) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {items.map(({ content, id }) => (
        <Task
          key={id}
          content={content}
          onClick={() => onClick(id)}
        />
      ))}
    </ol>
  );
}

ToDoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
