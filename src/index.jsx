import { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setTodo('');
    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (todoIdx) => {
    setTodos(todos.filter((_, idx) => idx !== todoIdx));
  };

  return (
    <Page
      todos={todos}
      todo={todo}
      onChangeTodo={handleChangeTodo}
      onClickAdd={handleAddTodo}
      onClickRemove={handleRemoveTodo}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
