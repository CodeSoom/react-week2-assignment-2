import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ content, onClick }) {
  return (
    <li>
      {content}
      <button type="button" onClick={onClick}>완료</button>
    </li>
  );
}

Item.propTypes = {
  content: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
