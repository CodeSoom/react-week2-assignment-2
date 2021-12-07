import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import TodoInput from './TodoInput';

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
      <Title title="TODO-List" />
      <TodoInput todo={newTodo} onChangeTodo={handleChangeTodo} onAddTodo={handleAddTodo} />
      <br />
      {todos.length ? (
        todos.map((todo, todoIdx) => (
          <div>
            <span>
              {`${todoIdx + 1}. ${todo} `}
            </span>
            <button type="button" onClick={() => handleRemoveTodo(todoIdx)}>완료</button>
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
