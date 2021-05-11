import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ onChangeInput, onSubmit }) {
  return (
    <p>
      <input id="inputBox" type="text" onChange={onChangeInput} />
      <button type="button" onClick={onSubmit}>
        추가
      </button>
    </p>
  );
}

Input.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
