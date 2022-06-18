import { useState } from 'react';

import { set } from 'immutable';

import ListOfTodos from './ListOfTodos';
import Form from './Form';

export default function App() {
  const [todo, setTodo] = useState(null);
  const [formInputValue, setFormInputValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.firstChild;

    if (value || false) {
      setTodo(value);
    }

    // setTodo('');
    // console.log(value);
    setFormInputValue('');
  };

  const handleOnChange = (e) => {
    setFormInputValue(e.target.value);
  };

  const handleClick = (e) => {
    // console.log('handleClick');
    // setDeletedTodoNumber(e.target.className);
  };

  return (
    <div>
      <h1>To-Do-App</h1>
      <Form
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        todo={todo}
        formInputValue={formInputValue}
      />
      <ListOfTodos todo={todo} />
    </div>
  );
}
