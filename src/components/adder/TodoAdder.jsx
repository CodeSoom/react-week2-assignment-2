import React from 'react';

/**
 *
 * @param todos {Todos}
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
export function TodoAdder({
  title,
  onChange,
  onClick,
}) {
  return (
    <div>
      <p>
        <input type="text" placeholder="할 일을 입력해주세요." value={title} onChange={onChange} />
        <button type="button" onClick={onClick}>추가</button>
      </p>
    </div>
  );
}
