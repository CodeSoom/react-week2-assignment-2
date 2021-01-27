import React from 'react';

import TextBox from './TextBox';
import AppendButton from './AppendButton';
import ToDoList from './ToDoList';

function Page() {
  return (
    <div>
      <h1>To-do</h1>

      <TextBox />

      <AppendButton />

      <ToDoList />

    </div>
  );
}

export default Page;
