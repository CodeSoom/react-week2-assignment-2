import React from 'react';

function TodoInsert({ insert, change, todo }) {
  const handleOnChange = (e) => {
    change(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insert(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="할 일을 입력하세요!" value={todo} onChange={handleOnChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInsert;
