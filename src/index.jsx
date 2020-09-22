import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [works, setTodos] = useState([]);

  const [work, setTodo] = useState('');

  function handleWorkTextChange(event) {
    setTodo(event.target.value);
  }

  function handleAddWorkButtonClick() {
    setTodos([...works, { key: Date.now(), value: work }]);
    setTodo('');
  }

  function handleCompleteWorkButtonClick(deleteTodoKey) {
    setTodos(works.filter(({ key }) => key !== deleteTodoKey));
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <div>
        <input type="text" placeholder="할 일을 입력해주세요." value={work} onChange={(e) => handleWorkTextChange(e)} />
        <button type="button" value="추가" onClick={handleAddWorkButtonClick}>추가</button>
      </div>

      <div>
        {
          works.length <= 0 ? <p>할 일이 없어요!</p> : ''
        }
        <ol>
          {
            works.map(({ key, value }) => (
              <li key={key}>
                {value}
                <button type="button" onClick={() => handleCompleteWorkButtonClick(key)}> 완료</button>
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
