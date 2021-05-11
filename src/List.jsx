import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';

import Item from './Item';

export default function List({ items, handleDeleteTask }) {
  if (R.isEmpty(items)) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {items.map((item) => (
        <Item
          content={item.content}
          onClick={() => handleDeleteTask(item.id)}
        />
      ))}
    </ol>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};
