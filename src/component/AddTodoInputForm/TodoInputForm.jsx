import React from 'react';

function TodoInputForm({ inputSentence, onChangeInputSentence }) {
  return (
    <input placeholder="" value={inputSentence} onChange={(e) => onChangeInputSentence(e.target.value)} />
  );
}

export default TodoInputForm;
