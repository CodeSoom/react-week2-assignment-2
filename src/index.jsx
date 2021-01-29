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

function Todo({ title, id, onClick }) {
  return (
    <li key={id.toString()}>
      {title}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
}

function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return (<h5>할 일이 없어요!</h5>);
  }
  return (
    <ol>
      {todos.map((todo) => (
        <Todo
          key={todo.id.toString()}
          title={todo.title}
          id={todo.id}
          onClick={onClick}
        />
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
        value={title}
        onChange={onChange}
      />
      <Button
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
  const handleChangeInput = (event) => {
    const title = event.target.value;
    setState({ todos, input: title });
  };

  const handleClickAddTodo = (event) => {
    event.preventDefault();
    setState({ todos: [...todos, { id: todos.length + 1, title: input }], input: '' });
  };

  const handleClickCompleted = (todoId) => {
    const incompletedTodos = todos.filter((todo) => (todo.id !== todoId));
    setState({ todos: incompletedTodos }, input);
  };

  return (
    <Page
      todos={todos}
      title={input}
      onChange={handleChangeInput}
      onClickAddTodo={handleClickAddTodo}
      onClick={handleClickCompleted}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
