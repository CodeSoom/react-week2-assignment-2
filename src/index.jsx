import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function List({ todos, onClick }) {
  const listItems = todos.length
    ? todos.map((todo, index) => (
      <li key={index}>
        {todo}
        <button type="button" onClick={() => onClick(index)}>완료</button>
      </li>
    ))
    : <span>할 일이 없어요!</span>;

  return (
    <ol>
      {listItems}
    </ol>
  );
}

function Form({ onSubmit, onChange, inputValue }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력해주세요." onChange={onChange} value={inputValue} />
      <input type="submit" value="추가" />
    </form>
  );
}

function App() {
  const [input, setInput] = useState({
    inputValue: '',
  });
  const [todos, setTodos] = useState([]);

  const { inputValue } = input;

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(
      [...todos, inputValue],
    );
    setInput({
      inputValue: '',
    });
  }

  function handleChange(e) {
    setInput({
      inputValue: e.target.value,
    });
  }

  function handleDelete(index) {
    setTodos(
      [...todos.slice(0, index), ...todos.slice(index + 1)],
    );
  }

  return (
    <div>
      <p>To-do</p>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputValue={inputValue}
      />
      <List
        todos={todos}
        onClick={handleDelete}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
