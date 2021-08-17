import React, { useState } from 'react';
import TodoInput from './TodoInput';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInput = ({ target }) => {
    setTodo(target.value);
  };

  const handleAddButtonClick = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  const handleCompleteButtonClick = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <p>To-do</p>
      <p>
        <TodoInput
          todo={todo}
          onChange={(event) => handleInput(event)}
          onClick={handleAddButtonClick}
        />
      </p>
      <p>
        {todos.length > 0
          ? todos.map((_todo, index) => (
            <div key={_todo}>
              {`${index + 1}. ${_todo}`}
              <button type="button" onClick={() => handleCompleteButtonClick(index)}>완료</button>
            </div>
          ))
          : <div>할 일이 없어요!</div>}
      </p>
    </div>
  );
}

export default App;
