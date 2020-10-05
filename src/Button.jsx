import React from 'react';

function Button({ children, onClick, disabled }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
