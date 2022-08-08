import React, { useCallback, useRef, useState } from 'react';
import List from './list';
import Form from './form';
import Button from './button';
import Input from './input';

const debounceFunction = (callback, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => callback(...args), delay);
  };
};

function App() {
  const [inputs, setInputs] = useState('');
  const [toDos, setToDos] = useState([]);
  const toDoInputs = useRef('');

  const handleChange = (event) => {
    const currentInput = event.target.value;

    setInputs(currentInput);
  };

  const debouncedHandleChange = useCallback(
    debounceFunction(handleChange, 200),
    [],
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs === '') {
      return;
    }

    const deepCopyTodos = [...toDos].map((todo) => {
      return { ...todo };
    });

    setToDos([...deepCopyTodos, { id: inputs + toDos.length, toDo: inputs }]);
    setInputs('');
    toDoInputs.current.value = '';
    toDoInputs.current.focus();
  };

  const handleToDoDone = (idToDelete) => {
    const editedToDos = toDos.filter((toDo) => toDo.id !== idToDelete);

    setToDos(editedToDos);
  };

  return (
    <>
      <h1>To-do</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          name="todo"
          inputRef={toDoInputs}
          placeholder="할 일을 입력해주세요"
          onChange={debouncedHandleChange}
        />
        <Button type="submit">추가</Button>
      </Form>
      {<List listItem={toDos} onClick={handleToDoDone} />}
    </>
  );
}

export default App;
