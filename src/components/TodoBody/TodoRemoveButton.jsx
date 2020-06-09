import React from 'react';

export default function TodoRemoveButton({ id, onClick }) {
  return (
    <button type="button" onClick={() => onClick(id)}>
      완료
    </button>
  );
}
