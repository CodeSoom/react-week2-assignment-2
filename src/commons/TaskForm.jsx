import React from 'react';

function TaskForm({ taskInput, onChange, onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit}>
      <input value={taskInput} placholder="할 일을 입력해 주세요" onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TaskForm;
