import React from 'react';

function TodoInsert({ onChange, onSubmit, todo }) {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요!" value={todo} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInsert;
