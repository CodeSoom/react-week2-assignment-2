import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [todos, setTodoList] = useState([]);

  const [todo, setTodo] = useState('');

  function handleTodoTextChange(event) {
    setTodo(event.target.value);
  }

  function handleAddTodoButtonClick() {
    setTodoList([...todos, todo]);
    setTodo('');
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <div>
        <input type="text" placeholder="할 일을 입력해주세요." value={todo} onChange={(e) => handleTodoTextChange(e)} />
        <button type="button" value="추가" onClick={handleAddTodoButtonClick}>추가</button>
      </div>

      <div>
        {
          todos.length || <p>할 일이 없어요!</p>
        }

        <ol>
          {
            todos.map((v, i) => (
              <li>
                {v}
                <button type="button"> 완료</button>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
