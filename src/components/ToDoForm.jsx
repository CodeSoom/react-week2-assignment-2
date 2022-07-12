import React from 'react';

function ToDoForm({
  toDoInput,
  onChangeToDo,
  onSubmit,
}) {
  return (
    <form>
      <input
        type="text"
        name="todo"
        placeholder="할 일을 입력해 주세요"
        onChange={onChangeToDo}
        value={toDoInput}
      />
      <button type="submit" onClick={onSubmit}>추가</button>
    </form>
  );
}

export default ToDoForm;
