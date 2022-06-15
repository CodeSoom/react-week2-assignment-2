import { useState } from 'react';

import TodoItemCreater from './TodoItemCreater';
import TodoList from './TodoList';

const App = () => {
  const [todoItemList, setTodoItemList] = useState([]);

  const handleSubmit = (todoItem) => {
    setTodoItemList((prev) => [...prev, todoItem]);
  };

  const handleClickComplete = (todoItem) => {
    setTodoItemList((prev) => prev.filter((item) => item !== todoItem));
  };

  return (
    <div>
      <TodoItemCreater onSubmit={handleSubmit} />
      <TodoList todoItemList={todoItemList} onClickComplete={handleClickComplete} />
    </div>
  );
};

export default App;
