import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [state, setState] = useState({
    newId: uuidv4(),
    todoTitle: '',
    todos: [],
  });

  const { newId, todoTitle, todos } = state;

  function handleChangeTitle(e) {
    setState({
      ...state,
      todoTitle: e.target.value,
    });
  }

  function handleAddClick() {
    setState({
      ...state,
      newId: uuidv4(),
      todoTitle: '',
      todos: [...todos, { id: newId, text: todoTitle }],
    });
  }

  function handleDoneClick(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <h1>To-do</h1>

      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleChangeTitle}
      />
      <button
        type="button"
        onClick={handleAddClick}
      >
        추가
      </button>

      <ol>
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                type="button"
                onClick={() => handleDoneClick(todo.id)}
              >
                완료
              </button>
            </li>
          ))
        ) : (
          <h2>할 일이 없어요!</h2>
        )}
      </ol>
    </div>
  );
}
