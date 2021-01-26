import React from 'react';
import Button from '../commons/Button';
import Input from '../commons/Input';
import List from '../components/List';

function Page() {
  return (
    <div>
      <h1>To-do</h1>
      <Input />
      <Button>추가</Button>
      <List />
    </div>
  );
}

export default Page;
