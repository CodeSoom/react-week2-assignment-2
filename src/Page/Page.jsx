import React from 'react';
import Button from '../commons/Button';
import Input from '../commons/Input';

function Page() {
  return (
    <div>
      <h1>To-do</h1>
      <Input />
      <Button>추가</Button>
    </div>
  );
}

export default Page;
