import React from 'react';

function Todoinput({
  inputText, onClickAddTodo, onChangeInputText,
}) {
  return (
    <span>
      <input type="text" value={inputText} onChange={onChangeInputText} />
      <button type="button" onClick={() => onClickAddTodo(inputText)}>추가</button>
    </span>
  );
}

export default Todoinput;
