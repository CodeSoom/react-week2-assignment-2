import { useState } from 'react';

import Form from './form';

const Todo = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodo((prevTodo) => {
      return [...prevTodo, input];
    });

    setInput('');
  };

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h3>To-do</h3>
      <Form value={input} onSubmit={addTodo} onChange={onChangeValue} />
      <ol>
        {todo.length
          ? todo.map((t, i) => (
              <li key={i}>
                {t} <button> 완료</button>
              </li>
            ))
          : '할 일이 없어요'}
      </ol>
    </>
  );
};

export default Todo;
