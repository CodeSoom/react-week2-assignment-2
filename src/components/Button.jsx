import React from 'react';

export default function Button({ children, onClick }) {
  function preventDefaultEvent(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <button type="submit" onClick={(e) => preventDefaultEvent(e)}>
      {children}
    </button>
  );
}
