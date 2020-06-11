import React, { useState } from 'react';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function InputBox({ onCreate }) {
  const [text, setText] = useState('');

  const handleInputChange = (inputValue) => {
    setText(inputValue);
  };

  const handleClick = () => {
    onCreate(text);
    setText('');
  };

  return (
    <>
      <Input
        placeholder="할 일을 입력해 주세요"
        value={text}
        onChange={handleInputChange}
      />
      <Button
        onClick={() => handleClick()}
      >
        추가
      </Button>
    </>
  );
}
