import React, { useState } from 'react';

import Button from './Button';

export default function TodoAdd({ onInsert }) {
  const [addContent, setAddContent] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    onInsert(addContent);
    setAddContent('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력하세요." value={addContent} onChange={(e) => setAddContent(e.target.value)} />
      <Button submitType>추가</Button>
    </form>
  );
}
