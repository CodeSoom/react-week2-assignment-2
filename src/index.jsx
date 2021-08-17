import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [input, setInput] = useState({
    inputValue: '',
  });
  const [todos, setTodos] = useState([]);

  const { inputValue } = input;

  function handleChange(e) {
    setInput({
      inputValue: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(
      [...todos, inputValue],
    );
    setInput({
      inputValue: '',
    });
    console.log(todos);
  }

  function handleDelete(index) {
    setTodos(
      [...todos.slice(0, index), ...todos.slice(index + 1)],
    );
    console.log(todos);
  }

  function List() {
    const listItems = todos.length ? todos.map((todo, index) => (
      <li key={index}>
        {todo}
        <button type="button" onClick={() => handleDelete(index)}>완료</button>
      </li>
    )) : <span>할 일이 없어요!</span>;
    return (
      <ol>
        {listItems}
      </ol>
    );
  }

  return (
    <div>
      <p>To-do</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="할 일을 입력해주세요." onChange={handleChange} value={inputValue} />
        <button type="submit">추가</button>
      </form>
      <List todos={todos} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
