import React from 'react';

function AddDo({
  setInputTodoText, setDoList, doList, inputTodoText,
}) {
  function addButtonClick(todoText) {
    setInputTodoText('');
    setDoList([...doList, todoText]);
  }

  return (
    <div>
      <input type="text" placeholder="할 일을 입력해 주세요." value={inputTodoText} onChange={(e) => setInputTodoText(e.target.value)} />
      <button type="button" onClick={() => addButtonClick(inputTodoText)}> 추가</button>
    </div>
  );
}

export default AddDo;
