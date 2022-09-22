import React, { useEffect, useRef, useState } from 'react';

import TodoDefault from './TodoDefault';
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoTitle from './TodoTitle';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const idRef = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoInput === '') return;

    setTodoList((current) => {
      const newTodo = {
        id: idRef.current,
        todo: todoInput,
      };

      idRef.current += 1;

      return [...current, newTodo];
    });

    setTodoInput('');
    inputRef.current.focus();
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
        inputRef={inputRef}
      />
      <ol>
        {
          todoList.map(({ id, todo }) => (
            <Todo
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
