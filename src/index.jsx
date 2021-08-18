import { useState } from 'react';
import ReactDOM from 'react-dom';

import { v4 } from 'uuid';

function App() {
  const [todoContent, setTodoContent] = useState('');
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setTodoContent(event.target.value);
  };

  const handleClick = () => {
    setTodos([
      ...todos,
      {
        id: v4(),
        content: todoContent,
      },
    ]);

    setTodoContent('');
  };

  const handleClickCompleteButton = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>To-do</h1>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleOnChange}
        value={todoContent}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        추가
      </button>
      <ol>
        {todos.length === 0
          ? <p>할 일이 없어요!</p>
          : todos.map(({ id, content }) => (
            <li key={id}>
              {content}
              <button
                type="button"
                onClick={() => handleClickCompleteButton(id)}
              >
                완료
              </button>
            </li>
          ))}
      </ol>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
