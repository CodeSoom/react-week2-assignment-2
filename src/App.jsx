import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

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
        <TodoList todos={todos} onClick={(index) => handleCompleteButtonClick(index)} />
      </p>
    </div>
  );
}

export default App;
