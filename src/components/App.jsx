import { useState } from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

function newId(list) {
  if (!list.length) {
    return 1;
  }

  const id = list[list.length - 1].id + 1;

  return id;
}

export default function App() {
  const [todos, setTodos] = useState([]);

  const [todoInput, updateTodoInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, { id: newId(todos), value: todoInput }]);
    updateTodoInput('');
  }

  function handleChange(e) {
    const { value } = e.target;

    updateTodoInput(value);
  }

  function handleDelete(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <h1>
        To-do
      </h1>
      <TodoForm
        input={todoInput}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {todos.length > 0 ? (
        <ol>
          {todos.map((todo) => (
            <Todo todo={todo} handleDelete={() => handleDelete(todo.id)} />
          ))}
        </ol>
      ) : (
        <p>
          할 일이 없어요!
        </p>
      )}
    </>
  );
}
