import React, { useState } from 'react';
import List from './list';
import Form from './form';
import Button from './button';
import Input from './inputs';

function App() {
  const [input, setInput] = useState('');
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === '') {
      return;
    }

    setToDos((previousToDos) => [...previousToDos, input]);
    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleToDoDone = (indexToDelete) => {
    const editedToDos = toDos.filter((_, index) => index !== indexToDelete);

    setToDos(editedToDos);
  };

  return (
    <>
      <h1>To-do</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="할 일을 입력해주세요"
          value={input}
          onChange={handleChange}
        />
        <Button type="submit">추가</Button>
      </Form>
      {toDos.length ? (
        <List toDos={toDos} onClick={handleToDoDone} />
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </>
  );
}

export default App;
