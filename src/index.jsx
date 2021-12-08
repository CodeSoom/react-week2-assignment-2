import { useState } from 'react';
import ReactDOM from 'react-dom';

function TodoList({ texts, onClick }) {
  return (
    <ol>
      {texts.map((text) => (
        <div key={text}>
          <li>
            {text}
            <button type="button" onClick={() => onClick(text)}>완료</button>
          </li>
        </div>
      ))}
    </ol>

  );
}

function TodoInput({ text, onChange, onClick }) {
  return (
    <>
      <div>
        <input type="text" placeholder="할 일을 입력해주세요" value={text} onChange={onChange} />
        <button type="button" onClick={onClick}>추가</button>
      </div>
    </>
  );
}

function App() {
  const [text, setText] = useState('');
  function onChangeText(e) {
    setText(e.target.value);
  }

  const [submitText, setSubmitText] = useState([]);
  function onClickSubmit() {
    setSubmitText((prev) => ([...prev, text]));
    setText('');
  }

  function onClickFinish(t) {
    setSubmitText((prevTexts) => prevTexts.filter((prev) => prev !== t));
  }

  return (
    <>
      <TodoInput text={text} onChange={onChangeText} onClick={onClickSubmit} />
      <TodoList texts={submitText} onClick={onClickFinish} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
