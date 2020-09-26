import React from 'react';

export default function Button({ children, onClick }) {
  function handleClick(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <button type="submit" onClick={(e) => handleClick(e)}>
      {children}
    </button>
  );
}
