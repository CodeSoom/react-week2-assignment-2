import React, { useState } from 'react';

function TodoInsert({ insert }) {
  const [todo, setTodo] = useState('');

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insert(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="할 일을 입력하세요!" value={todo} onChange={handleOnChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInsert;
