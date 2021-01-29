import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Button() {
  return (
    <button
      type="submit"
    >
      추가
    </button>
  );
}

function CompletedButton({ id, onClick }) {
  return (
    <button type="button" onClick={() => onClick(id)}>완료</button>
  );
}

function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return (<h5>할 일이 없어요!</h5>);
  }
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          {todo.title}
          <CompletedButton
            id={todo.id}
            onClick={onClick}
          />
        </li>
      ))}
    </ol>
  );
}

function Page({
  todos, onSubmit, onChange, onClick,
}) {
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

      <Todos
        todos={todos}
        onClick={onClick}
      />

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
    setTodos([...todos, { id: todos.length + 1, title: content }]);
    setContent('');
  };

  const handleClick = (todoId) => {
    const incompletedTodos = todos.filter((todo) => (todo.id !== todoId));
    setTodos(incompletedTodos);
  };

  return (
    <Page
      todos={todos}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
