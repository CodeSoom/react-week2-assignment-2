import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Title() {
  return <h1>To-do</h1>;
}

function Form({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력해 주세요" onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}

function List({ values }) {
  return (
    values.map((a, i) => (
      <div key={i.toString()}>
        {a.value}
      </div>
    )));
}

function App() {
  const [todo, setTodo] = useState({ value: '' });
  const [todos, setTodos] = useState([]);
  function handleChange(event) {
    setTodo({ value: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { value: todo.value }]);
  }

  return (
    <div>
      <Title />
      <Form onChange={handleChange} onSubmit={handleSubmit} />
      <List values={[...todos]} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
