import React from 'react';

const TodoForm = ({ onChange, onSubmit, title }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="할 일을 입력해 주세요"
      title={title}
      onChange={onChange}
    />
    <button type="submit">추가</button>
  </form>
);

export default TodoForm;
