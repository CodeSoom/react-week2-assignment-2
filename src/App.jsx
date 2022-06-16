import { useState } from 'react';

import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import EmptyMessage from './EmptyMessage';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [nextId, setNextId] = useState(1);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nextId, title }]);
    setNextId(nextId + 1);
    setTitle('');
    e.target.reset();
  };

  const handleComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Title />
      <TodoForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        title={title}
      />
      {
        todos.length
          ? (
            <TodoList
              todos={todos}
              onComplete={handleComplete}
            />
          )
          : <EmptyMessage />
      }
    </>
  );
};

export default App;
