import React, { useContext } from 'react';

import { InputContext, TodosContext } from '../context';
import Button from './views/Button';
import Input from './views/Input';

const InputBar = () => {
  const { addTodo } = useContext(TodosContext);
  const { handleChange, inputValue } = useContext(InputContext);

  return (
    <div>
      <Input
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={(event) => { handleChange(event); }}
      />
      <Button type="submit" onClick={addTodo}>
        추가
      </Button>
    </div>
  );
};

export default InputBar;
