import React from 'react';

import { InputProvider, TodosProvider } from './context';
import InputBar from './components/InputBar';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <p>To-do</p>
    <TodosProvider>
      <InputProvider>
        <InputBar />
      </InputProvider>
      <TodoList />
    </TodosProvider>
  </div>
);

export default App;
