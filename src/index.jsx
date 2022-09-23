import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

function App() {
  const [state, setState] = useState({
    value: '',
    toDoList: [],
  });
  const { value, toDoList } = state;

  function insertTodo() {
    const tempTodoList = toDoList;
    tempTodoList.push(value);
    setState({ value: '', toDoList: tempTodoList });
  }

  function deleteTodo(index) {
    const tempTodoList = toDoList.filter((todo, i) => i !== index);
    setState({ ...state, toDoList: tempTodoList });
  }

  return (
    <div>
      <p>To-Do</p>
      <input value={value} onChange={(e) => { setState({ ...state, value: e.target.value }); }} />
      <button type="button" onClick={insertTodo}>추가</button>
      <TodoList toDoList={toDoList} onClick={deleteTodo} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
