import React from 'react';

export default function Button({
  type,
  buttonTitle,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
}