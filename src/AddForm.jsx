import React from 'react';

import Input from './Input';
import Button from './Button';

function AddForm({ newTodo, onChange, onClick }) {
  return (
    <div>
      <Input newTodo={newTodo} onChange={onChange} />
      <Button onClick={onClick} disabled={newTodo.content === ''}>
        추가
      </Button>
    </div>
  );
}

export default AddForm;
