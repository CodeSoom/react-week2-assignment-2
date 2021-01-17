import React from 'react';

const Button = ({ children, type, onClick }) => {
  if (type === 'submit') {
    return (
      <button type="submit" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
