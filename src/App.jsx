import React, { useState } from 'react';
import TodoPage from './components/TodoPage';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
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

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  };

  return (
    <TodoPage
      todos={todos}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onRemove={onRemove}
    />
  );
}
