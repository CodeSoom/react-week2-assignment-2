import React from "react";

export default function Todo({ id, text, handleDelete }) {
  return (
    <div>
      {id}
      {text}

      <button type="button" onClick={() => handleDelete(id)}>
        완료
      </button>
    </div>
  );
}
