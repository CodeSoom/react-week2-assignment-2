import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

function Page({ onClick }) {
  return (
    <div>
      <h1>To-do</h1>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
      />
      <button
        type="submit"
        onClick={onClick}
      >
        제출
      </button>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

function App() {
  const [state, setState] = useState(
    [{
      key: 0,
      title: '',
      completed: false,
    }],
  );

  const { todo } = state;

  function handleSubmit({ title }) {
    setState(
      [...todo,
        { key: todo.length + 1, title, completed: false }],
    );
  }

  return (
    <Page
      todoList={todoList}
      onClick={handleSubmit}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
