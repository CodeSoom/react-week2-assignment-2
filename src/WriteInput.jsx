import React from 'react';

export default function WriteInput({
  handleClick, onSubmit, value, onChange,
}) {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="할일을 입력해주세요"
        />
        <button type="submit" onClick={handleClick}>
          추가
        </button>
      </form>
    </div>
  );
}
