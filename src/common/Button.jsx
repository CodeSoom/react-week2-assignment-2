import React from 'react';

export default function Button({ title, onPress }) {
  return (
    <button
      type="button"
      onClick={onPress}
    >
      {title}
    </button>
  );
}
