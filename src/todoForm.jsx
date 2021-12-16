import { useState } from 'react';

import Input from './Input';
import Button from './Button';

export default function TodoForm({ onClickAdd }) {
  const [inputValue, setValue] = useState('');

  function handleChange(event) {
    const { target: { value } } = event;

    setValue(value);
  }

  function handleClickAdd() {
    onClickAdd(inputValue);
    setValue('');
  }

  return (
    <form>
      <Input
        placeholder="할 일을 입력해주세요."
        value={inputValue}
        onChange={handleChange}
      />
      <Button onClick={handleClickAdd}>
        추가
      </Button>
    </form>
  );
}
