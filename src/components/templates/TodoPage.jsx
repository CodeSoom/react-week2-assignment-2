import React from 'react';

import Title from '../molecules/Title';
import InputBox from '../molecules/InputBox';
import TodoContent from '../organisms/TodoContent';

export default function TodoPage({
  input, items, onSubmit, onInputChange, onComplete,
}) {
  return (
    <>
      <Title
        title="To-do"
      />
      <div>
        <InputBox
          input={input}
          onSubmit={() => onSubmit()}
          onInputChange={(text) => onInputChange(text)}
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
