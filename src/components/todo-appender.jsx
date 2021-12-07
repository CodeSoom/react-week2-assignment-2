import React from 'react';

function TodoAppender() {
  return (
    <form>
      <input type="text" placeholder="할 일을 입력해 주세요" />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoAppender;
