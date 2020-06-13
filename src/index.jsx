import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Register({ toDoInput, handleToDoInput, createToDo }) {
  return (
    <div>
      <input
        type="text"
        name="toDoInput"
        value={toDoInput}
        onChange={(e) => handleToDoInput(e)}
        placeholder="할 일을 입력해주세요."
      />
      <button
        type="button"
        onClick={() => createToDo()}
      >
        추가
      </button>
    </div>
  );
}

function ToDo({ id, text, deleteToDo }) {
  return (
    <div>
      {text}
      <button
        type="button"
        onClick={() => deleteToDo(id)}
      >
        완료
      </button>
    </div>
  );
}

function ToDoList({ toDoList, deleteToDo }) {
  return (
    <ol start="1">
      {toDoList.map(({ id, text }) => (
        <li key={id}>
          <ToDo id={id} text={text} deleteToDo={deleteToDo} />
        </li>
      ))}
    </ol>
  );
}


function Page({
  toDoInput, toDoList, handleToDoInput, createToDo, deleteToDo,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Register toDoInput={toDoInput} handleToDoInput={handleToDoInput} createToDo={createToDo} />
      <ToDoList toDoList={toDoList} deleteToDo={deleteToDo} />
    </div>
  );
}

// 상태관리
function App() {
  const [state, setState] = useState({
    toDoInput: '',
    toDoList: [],
  });

  const { toDoInput, toDoList } = state;

  function handleToDoInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setState({
      [name]: value,
      ...state,
    });
  }

  function createToDo() {
    const newToDo = {
      id: Math.random() + 1,
      text: toDoInput.slice(),
    };
    setState({
      toDoInput: '',
      toDoList: [...toDoList, newToDo],
    });
  }

  function deleteToDo(id) {
    setState({
      toDoList: toDoList.filter((thisToDo) => thisToDo.id !== id),
    });
  }

  return (
    <Page
      toDoInput={toDoInput}
      toDoList={toDoList}
      handleToDoInput={handleToDoInput}
      createToDo={createToDo}
      deleteToDo={deleteToDo}
    />
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
