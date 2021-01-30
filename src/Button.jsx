import React from 'react';

export default function Button({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
    >
      완료
    </button>
  );
}
