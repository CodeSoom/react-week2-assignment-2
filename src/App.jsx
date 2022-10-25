import React, { useEffect, useRef, useState } from 'react';

import TodoDefault from './TodoDefault';
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoTitle from './TodoTitle';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    if (todoInput === '') return;

    setTodoList((current) => {
      const newTodo = {
        id: current[current.length - 1]?.id + 1 || 1,
        todo: todoInput,
      };

      return [...current, newTodo];
    });

    setTodoInput('');
    inputRef.current.focus();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleSubmit();
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
        onSubmit={onSubmit}
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
