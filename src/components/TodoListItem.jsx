import React from "react";

const TodoListItem = ({ todo }) => {
  const { text } = todo;

  return (
    <div className="TodoListItem">
      <div className="text">{text}</div>
      <div className="remove">완료</div>
    </div>
  );
};

export default TodoListItem;
