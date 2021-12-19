import React from 'react';

export default function Insert({ inputText, placeholder, onClick, onEdit }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputText}
        onChange={onEdit}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
