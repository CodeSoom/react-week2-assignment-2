import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
function Todo({ todoList }) {
  return (
    numbers.map((todo) => <li>{todo}</li>)
  );
}

function TodoList({ todoList }) {
  return (
    <Todo
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

function Page({ todo, onClick }) {
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
      <ul>
        <TodoList
          todo={todo}
        />
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

  const { todoList } = state;

  function handleSubmit(event) {
    setState(
      [...todoList,
        { key: todoList.length + 1, title: event.target.value, completed: false }],
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
