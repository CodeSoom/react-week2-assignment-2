import React, { useContext } from 'react';

import { TodosContext } from '../context/TodosContext';
import Button from './views/Button';
import Input from './views/Input';

const InputBar = () => {
  const { addTodo, handleChange, inputValue } = useContext(TodosContext);

  const onChange = (event) => {
    event.preventDefault();
    handleChange(event.target.value);
  };

  return (
    <div>
      <Input
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={onChange}
      />
      <Button type="submit" onClick={addTodo}>
        추가
      </Button>
    </div>
  );
};

export default InputBar;
