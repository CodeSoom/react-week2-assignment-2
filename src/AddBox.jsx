import React from 'react';

import Input from './Input';
import Button from './Button';

function AddBox({ todo, onChange, onClick }) {
  return (
    <div>
      <Input todo={todo} onChange={onChange} />
      <Button onClick={onClick} disabled={todo.content === ''}>
        추가
      </Button>
    </div>
  );
}

export default AddBox;
