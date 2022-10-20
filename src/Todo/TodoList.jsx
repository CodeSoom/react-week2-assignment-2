import React from 'react';

const TodoList = ({
  values, handleChange, onSubmit,
}) => (
  <div>
    <input
      type="text"
      name="todoInput"
      id="todoInput"
      values={values}
      onChange={handleChange}
      placeholder="할 일을 입력해주세요"
    />
    <button
      type="submit"
      onSubmit={() => onSubmit(values)}
    >
      추가
    </button>

  </div>
);

export default TodoList;
