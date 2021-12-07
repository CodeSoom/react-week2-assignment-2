import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import TodoInput from './TodoInput';
import Todos from './Todos';

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
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
