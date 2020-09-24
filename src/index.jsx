import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        content: '할 일',
      },
    ],
    todoContent: '',
  });

  const { todos, todoContent } = state;

  function handleClick(id) {
    setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  function handleChangeContent(e) {
    setState({
      todos,
      todoContent: e.target.value,
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <p>
        <input type="text" value={todoContent} onChange={handleChangeContent} placeholder="할 일을 입력해 주세요." />
        <button type="button">추가</button>
      </p>
      <span>할일이없어요!</span>
      <ol>
        {
          todos.map(({ id, content }) => (
            <li data-id={id} key={id}>
              <span>{content}</span>
              <button type="button" onClick={() => handleClick(id)}>완료</button>
            </li>
          ))
        }

      </ol>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
