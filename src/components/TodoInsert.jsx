import React from "react";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력해주세요" />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInsert;
