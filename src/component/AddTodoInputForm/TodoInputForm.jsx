import React from 'react';

function TodoInputForm({ inputSentence, handleChangeInputSentence }) {
  return (
    <input placeholder="" value={inputSentence} onChange={(e) => handleChangeInputSentence(e.target.value)} />
  );
}

export default TodoInputForm;
