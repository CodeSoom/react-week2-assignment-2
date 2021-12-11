import { useState } from 'react';
import ReactDOM from 'react-dom';

function ToDoList({ todo }) {
  return (
    <ol>
      <li>{todo}</li>
      <button type="button">완료</button>
    </ol>
  );
}

function InputForm({ text, todo, onChange }) {
  return (
    <div>
      <form>
        <input onChange={onChange} type="text" placeholder="할 일을 입력해 주세요" />
        <button type="button">
          추가
        </button>
        <p>{text}</p>
        <ToDoList
          todo={todo}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    text: '할 일이 없어요!',
    todo: '',
  });

  const { text, todo } = state;

  function resultText(e) {
    setState({
      ...state,
      text: '',
      todo: e.target.value,
    });
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <InputForm
        text={text}
        todo={todo}
        onChange={resultText}
      />
      <br />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
