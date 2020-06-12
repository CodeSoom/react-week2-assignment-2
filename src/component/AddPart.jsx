import React from 'react';


function AddPart({ addTodo }) {
  return (
    <p>
      <input id="input" />
      <button type="button" onClick={() => addTodo()}>추가</button>
    </p>
  );
}

export default AddPart;
