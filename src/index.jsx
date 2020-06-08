import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {

  const [todoListLength, setTodoListLength] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodoList = () => {
    setTodoList([...todoList, {
      id: todoListLength,
      text: input,
    }]);
    setTodoListLength(todoListLength + 1);
    setInput('');
  };
  return (
    <div>
      <h1>To-Do</h1>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="button" onClick={handleAddTodoList}>추가</button>
      </div>

      <ul style={{ marginTop: '20px' }}>
        <li>
          test
          <button type="button" style={{ marginLeft: '10px' }}>완료</button>
        </li>
      </ul>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
