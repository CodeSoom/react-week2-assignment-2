import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleClickAddTodo = () => {
    setTodoList([todoInput, ...todoList]);
    setTodoInput('');
  };

  const handleChangeInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleClickDone = (content) => {
    setTodoList(todoList.filter((item) => item !== content));
  };

  return (
    <div>
      <h1>To-do</h1>
      <input type="text" placeholder="할 일을 입력해 주세요" value={todoInput} onChange={handleChangeInput} />
      <button type="button" onClick={handleClickAddTodo}>추가</button>
      {
        todoList.length === 0 ? (<p>할 일이 없어요!</p>) : (
          <ol>
            {todoList.map((content) => (
              <li key={content}>
                {content}
                <button type="button" onClick={() => handleClickDone(content)}>완료</button>
              </li>
            ))}
          </ol>
        )
      }
    </div>
  );
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
