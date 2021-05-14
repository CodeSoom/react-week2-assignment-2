import React from 'react';

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

export default InputButton;
