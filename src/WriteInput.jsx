import React from 'react';

function WriteInput({ onClick }) {
  function handleClick() {
    const newItem = document.getElementsByClassName('write-input').value;
    onClick(newItem);
  }

  return (
    <div>
      <input
        type="text"
        className="write-input"
        placeholder="할일을 입력해주세요"
      />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}

export default WriteInput;
