import { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

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
    <Page
      todos={todos}
      todo={newTodo}
      onChangeTodo={handleChangeTodo}
      onAddTodo={handleAddTodo}
      onRemoveTodo={handleRemoveTodo}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
