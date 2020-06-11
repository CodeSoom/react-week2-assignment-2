import React, { useState } from 'react';

import TodoPage from './templates/TodoPage';

export default function App() {
  const [items] = useState([
    {
      id: 1,
      text: '할 일',
    },
    {
      id: 2,
      text: '아무것도 하지 않기',
    },
  ]);

  return (
    <>
      <TodoPage
        items={items}
      />
    </>
  );
}
