import React, { useState } from 'react';

function AddTodoList({ addTodo }) {
  const [sentence, setSentence] = useState('');

  function addTodoFunction(passedSentence) {
    addTodo(passedSentence);
    setSentence('');
  }

  return (
    <p>
      <input placeholder="" value={sentence} onChange={(e) => setSentence(e.target.value)} />
      <button type="button" onClick={() => addTodoFunction(sentence)}>추가</button>
    </p>
  );
}

export default AddTodoList;
