import React from 'react';

function Todoinput({
  inputText, nextTodoID, onClickAddTodo, onChangeInputText,
}) {
  return (
    <span>
      <input type="text" value={inputText} onChange={onChangeInputText} />
      <button type="button" onClick={() => onClickAddTodo(inputText, nextTodoID)}>추가</button>
    </span>
  );
}

export default Todoinput;
