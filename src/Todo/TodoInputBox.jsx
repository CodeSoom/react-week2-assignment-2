import React from 'react';


export default function TodoInputBox({ todoInput, updateTodoInput, appendTodo }) {
  return (
    <div>
      <input type="input" id="todo-inputbox" value={todoInput} onChange={updateTodoInput} />
      <button type="button" onClick={appendTodo}>추가</button>
    </div>
  );
}
