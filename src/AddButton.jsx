import React from 'react';

export default function AddButton({ state, setState }) {
  function handleAddTodo() {
    setState({
      ...state,
      todoList: [...state.todoList, { id: 1, contents: state.inputText }],
    });
  }
  return (
    <button type="button" onClick={handleAddTodo}>
      추가
    </button>
  );
}
