import React from 'react';

function Todoinput({ inputText, onClick, onChange }) {
  return (
    <span>
      <input type="text" value={inputText} onChange={onChange} />
      <button type="button" onClick={() => onClick(inputText)}>추가</button>
    </span>
  );
}

export default Todoinput;
