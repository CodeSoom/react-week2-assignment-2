import React from 'react';
import Button from './Button';

export default function AddForm({ onClick }) {
  const handleClick = () => {
    onClick(document.getElementById('add-todo').value);
    document.getElementById('add-todo').value = null;
  };

  return (
    <p>
      <input type="text" id="add-todo" />
      <Button name="추가" onClick={handleClick} />
    </p>
  );
}
