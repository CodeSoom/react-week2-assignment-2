import React from 'react';
import PropTypes from 'prop-types';

function InputButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      추가
    </button>
  );
}

InputButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default InputButton;
