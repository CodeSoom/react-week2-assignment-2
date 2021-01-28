import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Todo({ todos }) {
  return (
    todos.map((todo) => (
      <li key={todo.key.toString()}>
        {todo.title}
        <button type="button">완료</button>
      </li>
    ))
  );
}

function Todos({ todos }) {
  return (
    <Todo
      todos={todos}
    />
  );
}

function Button({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
    >
      추가
    </button>
  );
}

function Page({ todos, onClick }) {
  return (
    <div>
      <h1>To-do</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력해 주세요"
          // value={todos}
        />
        <Button onClick={onClick} />
      </form>
      <ol>
        <Todos
          todos={todos}
        />
      </ol>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([{
    key: 1, title: 'title1',
  },
  {
    key: 2, title: 'title2',
  }]);

  function handleSubmit() {
    setTodos([...todos, { key: todos.length + 1, title: 'title3' }]);
  }

  return (
    <Page
      todos={todos}
      onClick={handleSubmit}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
