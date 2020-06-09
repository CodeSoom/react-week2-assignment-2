import React from 'react';

export default function TodoAddButton({ inputValue, onClick }) {
  return (
    <button type="button" onClick={() => onClick(inputValue)}>추가</button>
  );
}
