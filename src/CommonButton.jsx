import React from 'react';

export default function CommonButton({
  children,
  handleClick,
  disabled = false,
}) {
  return (
    <button type="button" onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}
