import React, { useState } from 'react';

import TodoDefault from './TodoDefault';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoTitle from './TodoTitle';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoInput === '') return;

    setTodoList((current) => {
      const newTodo = {
        id: current[current.length - 1]?.id + 1 || 1,
        todo: todoInput,
      };

      return [...current, newTodo];
    });

    setTodoInput('');
  };

  const onChange = (e) => {
    const { value } = e.target;

    setTodoInput(value);
  };

  const confirmTodo = (id) => {
    setTodoList((current) => (
      current.filter((todo) => todo.id !== id)
    ));
  };

  return (
    <div>
      <TodoTitle />
      <TodoForm
        handleSubmit={handleSubmit}
        onChange={onChange}
        todoInput={todoInput}
      />
      <ol>
        {
          !!todoList.length
          && todoList.map(({ id, todo }) => (
            <TodoList
              key={id}
              todo={todo}
              id={id}
              confirmTodo={confirmTodo}
            />
          ))
        }
      </ol>
      {
        !todoList.length
        && <TodoDefault />
      }
    </div>
  );
}

export default App;
