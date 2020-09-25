import React from 'react';

import TodosProvider from './context/TodosProvider';
import InputBar from './components/InputBar';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <p>To-do</p>
    <TodosProvider>
      <InputBar />
      <TodoList />
    </TodosProvider>
  </div>
);

export default App;
