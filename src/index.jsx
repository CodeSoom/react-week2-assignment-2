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
    <Todo todos={todos} />
  );
}

function Button() {
  return (
    <button
      type="submit"
    >
      추가
    </button>
  );
}

function Page({ todos, onSubmit, onChange }) {
  return (
    <div>
      <h1>To-do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력해 주세요"
          onChange={onChange}
        />
        <Button />
      </form>
      <ol>
        <Todos todos={todos} />
      </ol>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState('');
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { key: todos.length + 1, title: content, completed: false }]);
    setContent('');
  };

  return (
    <Page
      todos={todos}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
