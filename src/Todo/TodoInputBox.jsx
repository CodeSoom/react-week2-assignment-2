import React from 'react';


export default function TodoInputBox({ todoInput, handleChangeTodoInput, appendTodo }) {
  return (
    <div>
      <input type="input" value={todoInput} onChange={(ev) => handleChangeTodoInput(ev.target.value)} />
      <button type="button" onClick={() => appendTodo()}>추가</button>
    </div>
  );
}
