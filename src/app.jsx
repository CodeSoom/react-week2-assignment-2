import React, { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState({ id: 1, text: '' });
  const [todos, setTodos] = useState([]);

  const handleTodoInput = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setTodos([...todos, todo]);
    setTodo({ id: todo.id + 1, text: '' });
  };

  const handleComplete = (index) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== index));
  };

  return (
    <>
      <h1>To-do</h1>
      <form onSubmit={handleTodoSubmit}>
        <input
          onChange={handleTodoInput}
          type="text"
          placeholder="할 일을 입력해주세요"
        />
        <input type="submit" value="추가" />
      </form>
      {!todos.length && <p>할 일이 없어요!</p>}
      <ol>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.text}
            <button type="button" onClick={() => handleComplete(todoItem.id)}>완료</button>
          </li>
        ))}
      </ol>
    </>
  );
}
