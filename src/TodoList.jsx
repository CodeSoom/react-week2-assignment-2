import React from 'react';

export default function TodoList({ state, setState }) {
  function handleDeleteTodo() {
    setState({
      ...state,
      todoList: [],
    });
  }

  return (
    <ol>
      {
        state.todoList.length > 0
          ? state.todoList.map((todo) => (
            <li key={todo.id}>
              {todo.contents}
              <button type="button" onClick={handleDeleteTodo}>
                완료
              </button>
            </li>
          ))
          : <div>할 일이 없어요!</div>
      }
    </ol>
  );
}
