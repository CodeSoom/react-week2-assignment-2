import React from 'react';

export default function TodoRemoveButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      완료
    </button>
  );
}
