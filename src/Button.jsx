import React from 'react';

export default function Button({ submitType, onClick, children }) {
  return (
    <button type={submitType ? 'submit' : 'button'} onClick={onClick}>{children}</button>
  );
}
