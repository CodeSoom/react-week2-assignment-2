import React from 'react';

export default function CommonButton({ lable, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {lable}
    </button>
  );
}
