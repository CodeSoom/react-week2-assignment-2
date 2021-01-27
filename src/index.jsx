import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Todo({ emptyMsg, todos }) {
  return (
    todos.map((todo) => <li>{todo || emptyMsg}</li>)
  );
}

function Todos({ emptyMsg, todoList }) {
  return (
    <Todo
      emptyMsg={emptyMsg}
      todoList={todoList}
    />
  );
}

function Button({ onClick }) {
  return (
    <button
      type="submit"
      onClick={(event) => onClick(event)}
    >
      제출
    </button>
  );
}

function Page({ emptyMsg, todo, onClick }) {
  return (
    <div>
      <h1>To-do</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력해 주세요"
          value={todo}
        />
        <Button
          onClick={onClick}
        />
      </form>
      <ul style={{ listStyleType: 'none' }}>
        <Todos
          emptyMsg={emptyMsg}
          todo={todo}
        />
      </ul>
    </div>
  );
}

function update() {

}

function App() {
  const [state, setState] = useState(
    [{
      key: 1,
      title: 'title1',
      completed: false,
    }],
  );

  const { todos } = state;
  const emptyMsg = '할일이 없어요!';

  function handleSubmit(event) {
    setState(
      [...todos,
        { key: todos.length + 1, title: event.target.value, completed: false }],
    );
    update({ todos });
  }

  return (
    <Page
      emptyMsg={emptyMsg}
      todoList={todos}
      onClick={handleSubmit}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
