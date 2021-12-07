import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setNewTodo('');
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>TO-DO</h1>
      <div>
        <input
          type="text"
          placeholder="할 일을 입력해주세요!"
          value={newTodo}
          onChange={handleChangeTodo}
        />
        <button type="button" onClick={handleAddTodo}>추가</button>
      </div>
      <br />
      {todos.length ? (
        todos.map((todo) => (
          <div>
            <span>{todo}</span>
            <span>{' '}</span>
            <button type="button">확인</button>
          </div>
        ))
      ) : (
        <div>할 일이 없어요!</div>
      )}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
