import React from "react";

export default function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To-do</div>
      <div className="content">{children}</div>
    </div>
  );
}
