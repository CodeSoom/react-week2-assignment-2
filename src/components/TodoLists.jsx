import React from 'react';

export default function TodoLists({ todos, onClickComplete }) {
  const showTodos = () => {
    if (todos.length === 0) {
      return <span>할 일이 없어요!</span>;
    }
    return todos.map((item) => (
      <li key={item.id}>
        <span>{item.text}</span>
        <button type="button" id={item.id} onClick={onClickComplete}>
          완료
        </button>
      </li>
    ));
  };

  return <ol>{showTodos()}</ol>;
}
