import React from 'react';

function TodoInput({
  value,
  placeholder,
  onChange,
  onClick,
}) {
  return (
    <div>
      <input type="text" id="todo" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      <button type="button" onClick={() => onClick()}>추가</button>
    </div>
  );
}

export default TodoInput;
