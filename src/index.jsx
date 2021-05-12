import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './pages/TodoList';
// 리액트 2-2 과제 : 컴포넌트 분리

function App() {
  const [state, setState] = useState({
    toDoList: [],
  });
  const { toDoList } = state;

  function handleClickAdd() {
    const input = document.getElementById('input').value;
    document.getElementById('input').value = '';
    setState({ toDoList: toDoList.concat(input) });
  }

  function handleClickDone(done) {
    setState({ toDoList: toDoList.filter(((todo) => (todo !== done))) });
  }

  return (
    <ToDoList toDoList={toDoList} onClickAdd={handleClickAdd} onClickDone={handleClickDone} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
