import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import Todo from './components/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Date.now(),
        content: e.target['new-todo'].value,
      },
    ]);

    e.target['new-todo'].value = '';
  };

  const handleComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>To-do</h1>
      <AddTodoForm onSubmit={addTodo} />
      <br />
      {
        todos.length ? (
          <ol>
            {todos.map(({ content, id }) => (
              <Todo content={content} handleComplete={() => handleComplete(id)} />
            ))}
          </ol>
        ) : <span>할 일이 없어요!</span>
      }

    </>
  );
};

export default App;
