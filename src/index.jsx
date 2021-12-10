import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AddButton({ children }) {
  return (
    <button type="button" onClick={children}>
      추가
    </button>
  );
}

function InputForm({ text, onClick }) {
  return (
    <div>
      <form>
        <input key="Form" type="text" placeholder="할 일을 입력해 주세요" />
        <AddButton>{onClick}</AddButton>
      </form>
      <p>{text}</p>
    </div>
  );
}

function Page({ text, onClick }) {
  return (
    <InputForm
      text={text}
      onClick={onClick}
    />
  );
}

function ToDoList({ todo, onClick }) {
  return (
    <ol>
      <li>{todo}</li>
      <button type="button" onClick={onClick}>완료</button>
    </ol>
  );
}

function App() {
  const [state, setState] = useState({
    text: '할 일이 없어요!',
    todo: '',
  });

  const { text, todo } = state;

  function resultText() {
    setState({
      text: '',
      todo: 'wow',
    });
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <Page
        text={text}
        onClick={resultText}
      />
      <ToDoList
        todo={todo}
        onClick={resultText}
      />
      <br />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
