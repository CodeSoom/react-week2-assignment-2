import React from 'react';

function InputForm({ onClick, onChange, value }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="input" type="text" value={value} onChange={onChange} />
      <button type="submit" onClick={onClick}>
        추가
      </button>
    </form>
  );
}

export default InputForm;
