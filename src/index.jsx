import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
      {
        toDoList.length > 0 ? toDoList.map((todo, index) => (
          <p>
            {`${index + 1}.${todo}`}
            <button type="button" onClick={() => deleteTodo(index)}>완료</button>
          </p>
        ))
          : <p>할 일이 없어요!</p>
      }
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
