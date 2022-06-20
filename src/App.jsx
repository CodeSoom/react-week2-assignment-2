import { useState } from 'react';

import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
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
