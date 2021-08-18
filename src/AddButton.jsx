import React from 'react';

export default function AddButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      추가
    </button>
  );
}
