import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 1,
    itemTitle: '',
    items: [
      { id: 0, todo: '할 일' },
    ],
  });

  const { newId, items, itemTitle } = state;

  function onSubmit(e) {
    e.preventDefault();

    setState({
      ...state,
      newId: newId + 1,
      itemTitle: '',
      items: [
        ...items,
        {
          id: newId,
          todo: itemTitle,
        },
      ],
    });
  }

  function onChangeTitle(event) {
    setState({
      ...state,
      itemTitle: event.target.value,
    });
  }

  function handleComplete(id) {
    setState({
      ...state,
      items: items.filter((value) => value.id !== id),
    });
  }

  return (
    <Page
      items={items}
      itemTitle={itemTitle}
      onChangeTitle={onChangeTitle}
      handleComplete={handleComplete}
      onSubmit={onSubmit}
    />
  );
}
