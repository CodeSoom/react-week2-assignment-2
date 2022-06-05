import React from 'react';

export default function TodoItem({ text, onClick }) {
  return (
    <div>
      {text}
      <button type="button" onClick={onClick}>완료</button>
    </div>
  );
}
