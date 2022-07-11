import React from 'react';

function ToDoForm({ textInput, onTextChange, onAddButtonClick }) {
  return (
    <form>
      <input type="text" placeholder="할 일을 입력해 주세요" onChange={onTextChange} value={textInput} />
      <button type="submit" onClick={onAddButtonClick}>추가</button>
    </form>
  );
}

export default ToDoForm;
