import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './todoInput';
import AddButton from './addButton';

function App() {
  const [state, setState] = useState({
    todo: [] || '할일이 없어요!',
  });

  return (
    <div>
      <h1>To-Do</h1>
      <TodoInput />
      <AddButton />
    </div>
  );
}

ReactDOM.render(<App> </App>, document.getElementById('app'));
