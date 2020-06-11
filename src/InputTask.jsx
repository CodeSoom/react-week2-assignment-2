import React from 'react';

function InputTask({ inputText, handleInputText, handleAddTask }) {
  return (
    <p>
      <input type="text" onChange={(e) => handleInputText(e)} value={inputText} />
      <button type="button" onClick={() => handleAddTask(inputText)}> 추가 </button>
    </p>
  );
}

export default InputTask;
