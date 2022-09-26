import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
