import React from 'react';

import Input from './Input';
import Button from './Button';

function Form({ newTodo, onChange, onClick }) {
  return (
    <div>
      <Input newTodo={newTodo} onChange={onChange} />
      <Button onClick={onClick} disabled={!newTodo}>
        추가
      </Button>
    </div>
  );
}

export default Form;
