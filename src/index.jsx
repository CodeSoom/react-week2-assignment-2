import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [todo, setTodo] = useState('');
  const [array, setArray] = useState([]);

  function handleChange(event) {
    const { target: { value } } = event;

    setTodo(value);
  }

  function handleClickAdd() {
    setArray([...array, todo]);
    setTodo('');
  }

  function handleClickDone(item) {
    setArray(array.filter((it) => it !== item));
  }

  return (
    <>
      <h1>To-do</h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="할 일을 입력해주세요."
            value={todo}
            onChange={handleChange}
          />
          <button type="button" onClick={handleClickAdd}>
            추가
          </button>
        </form>
      </div>
      {array.length === 0
        ? <p>할 일이 없어요!</p>
        : (
          <ol>
            {array.map((item) => (
              <li key={item}>
                {item}
                <button
                  type="button"
                  onClick={() => handleClickDone(item)}
                >
                  완료
                </button>
              </li>
            ))}
          </ol>
        )}
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
