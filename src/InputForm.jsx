import React from 'react';

function InputForm({ onClick }) {
  return (
    <form>
      <input id="input" type="text" required />
      <button type="submit" onClick={onClick}>
        추가
      </button>
    </form>
  );
}

export default InputForm;
