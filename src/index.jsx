import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Title() {
  return <h1>To-do</h1>;
}

function Default() {
  return <p>할 일이 없어요!</p>;
}

function Input({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input id="todoinput" type="text" placeholder="할 일을 입력해 주세요" onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}

function List({ values, onClick }) {
  return (
    <ol>
      {
        values.map((a, i) => (
          <Task key={i.toString()} dataKey={i} value={a.value} onClick={onClick} />
        ))
      }
    </ol>
  );
}

function Task({ dataKey, value, onClick }) {
  return (
    <li>
      {value}
      <ButtonDone onClick={() => onClick(dataKey)} />
    </li>
  );
}

function ButtonDone({ onClick }) {
  return <button type="button" onClick={onClick}>완료</button>;
}

function App() {
  const [task, setTodo] = useState({ value: '' });
  function handleChange(event) {
    setTodo({ value: event.target.value });
  }

  const [todoList, setTodoList] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    if (task.value === '') return;

    setTodoList([...todoList, { value: task.value }]);
    setTodo({ value: '' });
    document.getElementById('todoinput').value = '';
  }

  function handleClickDone(index) {
    return setTodoList(
      [...todoList.slice(0, index), ...todoList.slice(index + 1, todoList.length)],
    );
  }

  return (
    <div>
      <Title />
      <Input onChange={handleChange} onSubmit={handleSubmit} />
      {todoList.length === 0
        ? (<Default />)
        : (<List values={[...todoList]} onClick={handleClickDone} />)}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
