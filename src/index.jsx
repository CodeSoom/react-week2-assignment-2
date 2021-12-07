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

  const handleRemoveTodo = (deletedTodoIdx) => {
    setTodos(todos.filter((todo, todoIdx) => todoIdx !== deletedTodoIdx));
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
        todos.map((todo, todoIdx) => (
          <div>
            <span>
              {`${todoIdx + 1}. ${todo} `}
            </span>
            <button type="button" onClick={() => handleRemoveTodo(todoIdx)}>확인</button>
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
