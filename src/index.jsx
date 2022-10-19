import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TodoForm({ onSubmit }) {
  const [todoText, setTodoText] = useState('');
  const handleChange = (e) => setTodoText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText) {
      alert('할 일을 입력해 주세요😀');
      return;
    }
    if (onSubmit) {
      onSubmit(todoText);
    }
    setTodoText('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력해주세요."
          onChange={handleChange}
          value={todoText}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

function TodoPage({ onSubmit, handleChange, todoText }) {
  return (
    <div>
      <p>assignment2</p>
      <h3>To-do</h3>
      <TodoForm onSubmit={onSubmit} handleChange={handleChange} todoText={todoText} />
      {/*  <Todos /> */}
    </div>
  );
}

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleSubmit = (todoItem) => {
    setTodoItems([
      ...todoItems, {
        id: todoItems.length + 1,
        todo: todoItem,
      },
    ]);
  };

  console.log(todoItems);

  return (
    <TodoPage onSubmit={handleSubmit} />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
