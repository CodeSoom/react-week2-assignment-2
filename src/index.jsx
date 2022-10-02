import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Page from './component/Page';

function App() {
  const [todo, setTodo] = useState('');
  const [items, setItems] = useState([]);
  const itemId = useRef(0);

  const onChangeTodo = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  function handleAddButton() {
    setItems([
      ...items,
      {
        id: itemId.current,
        content: todo,
      },
    ]);
    setTodo('');
    itemId.current += 1;
  }

  function handleCompleteButton(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <Page
      todo={todo}
      items={items}
      onChangeTodo={onChangeTodo}
      handleAddButton={handleAddButton}
      handleCompleteButton={handleCompleteButton}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
