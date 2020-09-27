import React from 'react';

import Input from './Input';
import Button from './Button';

function Form({ todoContent, onChange, onClick }) {
  return (
    <div>
      <Input todoContent={todoContent} onChange={onChange} />
      <Button onClick={onClick} disabled={!todoContent}>
        추가
      </Button>
    </div>
  );
}

export default Form;
