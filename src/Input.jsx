import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ value, onChangeInput, onSubmit }) {
  return (
    <p>
      <input
        value={value}
        type="text"
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        추가
      </button>
    </p>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
