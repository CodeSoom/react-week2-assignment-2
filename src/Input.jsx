import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ value, onChange, inputButtonClick }) {
  Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    inputButtonClick: PropTypes.string.isRequired,
  };

  return (
    <p>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={inputButtonClick}>추가</button>
    </p>
  );
}
