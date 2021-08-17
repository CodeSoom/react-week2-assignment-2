import React from 'react';

export default function CreateButton({ inputText, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      추가
    </button>
  );
}
