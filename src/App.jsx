import { useState } from 'react';

import TodoItemCreater from './TodoItemCreater';
import Todos from './Todos';

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleSubmit = (todoItem) => {
    setTodoItems([...todoItems, { id: todoItems.length + 1, todo: todoItem }]);
  };

  const handleClickComplete = (todoItemId) => {
    setTodoItems(todoItems.filter((item) => item.id !== todoItemId));
  };

  return (
    <div>
      <TodoItemCreater onSubmit={handleSubmit} />
      <Todos todoItems={todoItems} onClickComplete={handleClickComplete} />
    </div>
  );
};

export default App;
