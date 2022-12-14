import { useState } from 'react';

import Form from './form';
import List from './list';

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
      <List todo={todo} />
    </>
  );
};

export default Todo;
