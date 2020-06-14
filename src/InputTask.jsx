import React from 'react';

function InputTask({ inputText, handleChangeText, handleClickAddTask }) {
  return (
    <p>
      <input type="text" onChange={(e) => handleChangeText(e)} value={inputText} />
      <button type="button" onClick={() => handleClickAddTask(inputText)}> 추가 </button>
    </p>
  );
}

export default InputTask;
