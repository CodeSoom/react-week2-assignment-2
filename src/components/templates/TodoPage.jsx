import React from 'react';

import Title from '../molecules/Title';
import InputBox from '../molecules/InputBox';
import TodoContent from '../organisms/TodoContent';

export default function TodoPage() {
  return (
    <>
      <Title
        title="To-do"
      />
      <div>
        <InputBox />
      </div>
      <div>
        <TodoContent />
      </div>
    </>
  );
}
