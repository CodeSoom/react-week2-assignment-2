import { useState } from 'react';

import ListOfTodos from './ListOfTodos';
import Form from './Form';

const key = {
  value: 0,
};

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [message, setMessage] = useState('할 일이 없어요!');

  const receiveSubmit = (formInputValue) => {
    key.value += 1;
    setTodoList([...todoList, { key: key.value, text: formInputValue }]);
    setMessage('');
  };

  const handleButttonClick = (key) => {
    setTodoList(todoList.filter((item) => item.key !== key));

    if (todoList.length === 1) {
      setMessage('할 일이 없어요!');
    }
  };

  return (
    <div>
      <h1>To-Do-App</h1>
      <Form receiveSubmit={receiveSubmit} />
      <ListOfTodos
        todoList={todoList}
        handleButttonClick={handleButttonClick}
      />
      <div>{message}</div>
    </div>
  );
}
