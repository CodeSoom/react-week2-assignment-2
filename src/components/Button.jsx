import React from 'react';

function Button({ children, type, onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
