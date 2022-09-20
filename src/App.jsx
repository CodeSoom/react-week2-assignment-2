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

  const confirmTodo = (idx) => {
    setTodoList((current) => {
      const newTodoList = [...current];
      newTodoList.splice(idx, 1);
      return newTodoList;
    });
  };

  return (
    <div>
      <TodoTitle />
      <TodoForm
        handleSubmit={handleSubmit}
        onChange={onChange}
        todoInput={todoInput}
      />
      {
        todoList.length
          ? (
            <ol>
              {
                todoList.map(({ id, todo }, idx) => (
                  <TodoList
                    key={id}
                    todo={todo}
                    idx={idx}
                    confirmTodo={confirmTodo}
                  />
                ))
              }
            </ol>
          )
          : <TodoDefault />
      }
    </div>
  );
}

export default App;
