import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setId] = useState(0);

  const onInsert = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId,
        todo: text,
      },
    ]);
    setId(nextId + 1);
  };

  const onRemove = (id) => {
    setTodos(
      [...todos].filter((todo) => todo.id !== id),
    );
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInsert
        onInsert={onInsert}
      />
      {!todos.length
        ? <p>할 일이 없어요!</p>
        : (
          <TodoList
            todos={todos}
            onRemove={onRemove}
          />
        )}
    </div>
  );
}
