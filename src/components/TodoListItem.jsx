import React from "react";

export default function TodoListItem({ todo, onRemove }) {
  const { id, text } = todo;

  return (
    <form className="TodoListItem">
      {id} . {text}
      <button type="button" onClick={() => onRemove(id)}>
        완료
      </button>
    </form>
  );
}
