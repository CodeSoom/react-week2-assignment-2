import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addItem(newItem) {
    console.log('todoItems', todoItems);
    console.log('newItem', newItem);
    setTodoItems([...todoItems, newItem]);
  }

  return <Page items={todoItems} addItem={addItem}></Page>;
}

ReactDOM.render(<App />, document.getElementById('app'));
