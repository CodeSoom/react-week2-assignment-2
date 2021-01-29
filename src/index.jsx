import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Button({ onClickAddTodo }) {
  return (
    <button
      type="submit"
      onClick={onClickAddTodo}
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
  todos, onClickAddTodo, onChange, onClick, title,
}) {
  return (
    <div>
      <h1>To-do</h1>

      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
      />
      <Button
        title={title}
        onClickAddTodo={onClickAddTodo}
      />

      <Todos
        todos={todos}
        onClick={onClick}
      />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    todos: [],
    input: '',
  });

  const { todos, input } = state;
  const handleChange = (event) => {
    const title = event.target.value;
    setState({ todos, input: title });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ todos: [...todos, { id: todos.length + 1, title: input }], input });
  };

  const handleClick = (todoId) => {
    const incompletedTodos = todos.filter((todo) => (todo.id !== todoId));
    setState({ todos: incompletedTodos }, input);
  };

  return (
    <Page
      todos={todos}
      title={input}
      onChange={handleChange}
      onClickAddTodo={handleSubmit}
      onClick={handleClick}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
