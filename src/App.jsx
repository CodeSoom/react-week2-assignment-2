import { useState } from 'react';

import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTodo = (title) => {
    setTodos([...todos, { id: nextId, title }]);
    setNextId(nextId + 1);
  };

  const deleteTodo = (todoDelete) => {
    setTodos(todos.filter((todo) => todo.id !== todoDelete.id));
  };

  return (
    <>
      <Title />
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        onComplete={deleteTodo}
      />
    </>
  );
};

export default App;
