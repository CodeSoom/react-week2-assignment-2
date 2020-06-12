import React from 'react';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function InputBox({ input, onInputChange, onSubmit }) {
  return (
    <>
      <Input
        placeholder="할 일을 입력해 주세요"
        value={input}
        onChange={(text) => onInputChange(text)}
      />
      <Button
        onClick={() => onSubmit()}
      >
        추가
      </Button>
    </>
  );
}
