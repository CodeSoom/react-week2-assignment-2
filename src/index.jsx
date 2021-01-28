import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Todo({ todos, onClick }) {
  return (
    todos.map((todo) => (
      <li key={todo.key.toString()}>
        {todo.title}
        <button type="button" onClick={onClick}>완료</button>
      </li>
    ))
  );
}

function Todos({ todos, onClick }) {
  return (
    <Todo
      todos={todos}
      onClick={onClick}
    />
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

function EmptyTodo({ todos }) {
  if (todos.length === 0) {
    return (<h5>할 일이 없어요!</h5>);
  }
  return '';
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
      <EmptyTodo todos={todos} />
      <ol>
        <Todos
          todos={todos}
          onClick={onClick}
        />
      </ol>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState('');

  const saveTitle = (event) => {
    setContent(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { key: todos.length + 1, title: content }]);
    setContent('');
  };

  const removeCompletedTodo = (todoKey) => {
    const incompletedTodos = todos.filter((todo) => todo.key !== todoKey);
    setTodos(incompletedTodos);
    return (
      <Page
        todos={todos}
        onChange={saveTitle}
        onSubmit={addTodo}
        onClick={removeCompletedTodo}
      />
    );
  };

  return (
    <Page
      todos={todos}
      onChange={saveTitle}
      onSubmit={addTodo}
      onClick={removeCompletedTodo}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
