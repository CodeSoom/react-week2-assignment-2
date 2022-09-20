import React, { useState } from 'react';

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
      <h1>To-do</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={todoInput}
          placeholder="할 일을 입력해 주세요"
          onChange={(e) => onChange(e)}
        />
        <button type="submit">
          추가
        </button>
      </form>
      {
        todoList.length
          ? (
            <ol>
              {
                todoList.map(({ id, todo }, idx) => (
                  <li key={id}>
                    {todo}
                    <button
                      type="button"
                      onClick={() => confirmTodo(idx)}
                    >
                      완료
                    </button>
                  </li>
                ))
              }
            </ol>
          )
          : <span>할 일이 없어요!</span>
      }
    </div>
  );
}

export default App;
