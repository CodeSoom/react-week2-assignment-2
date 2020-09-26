import React from 'react';

import Input from './Input';
import Button from './Button';

export default function AddWorkForm({ value, onClick, onChange }) {
  return (
    <form>
      <Input value={value} onChange={onChange} />
      <Button onClick={onClick}>추가</Button>
    </form>
  );
}
