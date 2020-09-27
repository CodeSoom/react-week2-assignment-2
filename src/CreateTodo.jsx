import React from 'react';

const CreateTodo = ({ todoTitle, onChange, onCreate }) => (
  <div>
    <input
      name="todoTitle"
      placeholder="할 일을 입력해 주세요"
      onChange={onChange}
      value={todoTitle}
    />
    <button type="button" onClick={onCreate}>등록</button>
  </div>

);

export default CreateTodo;
