import React, { useRef, useState } from 'react';
import List from './list';
import Form from './form';
import Button from './button';
import Input from './input';

function App() {
  const [toDos, setToDos] = useState([]);
  const toDoInputs = useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentInput = toDoInputs.current.value;
    const resetInputValue = () => {
      document.getElementsByClassName('todo-input')[0].value = '';
    };

    if (currentInput === '') {
      return;
    }

    setToDos((previousToDos) => [...previousToDos, currentInput]);
    resetInputValue();
    toDoInputs.current.focus();
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
          className="todo-input"
          inputRef={toDoInputs}
          placeholder="할 일을 입력해주세요"
        />
        <Button type="submit">추가</Button>
      </Form>
      {toDos.length > 0 && <List listItem={toDos} onClick={handleToDoDone} />}
      {toDos.length === 0 && <p>할 일이 없어요!</p>}
    </>
  );
}

export default App;
