import React from 'react';

function WriteInput({ handleClick, onSubmit }) {
  // function onChange(e) {
  //   const { value } = e.target;
  // }

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" name="todo" placeholder="할일을 입력해주세요" />
        <button type="submit" onClick={handleClick}>
          추가
        </button>
      </form>
    </div>
  );
}

export default WriteInput;
