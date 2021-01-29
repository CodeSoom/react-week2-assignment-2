import React from 'react';

function TaskForm({ taskInput, onTaskInputChange, onTaskFormSubmit }) {
  return (
    <form onSubmit={onTaskFormSubmit}>
      <input value={taskInput} placholder="할 일을 입력해 주세요" onChange={onTaskInputChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TaskForm;
