import React from 'react';

export default function CommonButton({ lable, handleClick, disabled = false }) {
  return (
    <button type="button" onClick={handleClick} disabled={disabled}>
      {lable}
    </button>
  );
}
