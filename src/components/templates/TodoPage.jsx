import React from 'react';

import Title from '../molecules/Title';
import InputBox from '../molecules/InputBox';
import TodoContent from '../organisms/TodoContent';

export default function TodoPage({ items, onComplete, onCreate }) {
  return (
    <>
      <Title
        title="To-do"
      />
      <div>
        <InputBox
          onCreate={(text) => onCreate(text)}
        />
      </div>
      <div>
        <TodoContent
          items={items}
          onComplete={(id) => onComplete(id)}
        />
      </div>
    </>
  );
}
