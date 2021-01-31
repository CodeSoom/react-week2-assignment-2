import React, { useEffect, useState } from 'react';

import AddInput from './AddInput';
import TodoTemplete from './TodoTemplete';

const templetes = ['1시간 홈트', '1일 1 야채', '1일 1 과일'];

function TodoForm({ handleAddTodo }) {
  const [value, setValue] = useState('');
  const [selectedTemplete, setSelectedTemplete] = useState(null);

  function handleInput(event) {
    setValue(event.target.value);
  }

  function handleSelectTemplete(item) {
    setSelectedTemplete(item);
  }

  function clearInput() {
    setValue('');
  }

  function onSubmit(event) {
    event.preventDefault();

    handleAddTodo(value);

    clearInput();
    setSelectedTemplete(null);
  }

  useEffect(() => {
    setValue(selectedTemplete || '');
  }, [selectedTemplete]);

  return (
    <>
      <TodoTemplete templetes={templetes} onClickTemplete={handleSelectTemplete} />
      <form onSubmit={onSubmit}>
        <AddInput value={selectedTemplete || value} handleInput={handleInput} />
      </form>
    </>
  );
}

export default TodoForm;
