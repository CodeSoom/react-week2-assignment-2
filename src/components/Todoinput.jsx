import React from 'react';

function Todoinput({ inputText, onClick, onChange }) {
  return (
    <form>
      <input type="text" value={inputText} onChange={onChange} />
      <button type="button" onClick={() => onClick(inputText)}>추가</button>
    </form>
  );
}

export default Todoinput;
