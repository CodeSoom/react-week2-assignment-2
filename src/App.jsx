import { useState } from 'react';

import TodoForm from './TodoForm';
import Todos from './Todos';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText) {
      // eslint-disable-next-line no-alert
      alert('할 일을 입력해 주세요😀');
      return;
    }

    setTodoItems([
      ...todoItems, {
        id: Date.now(),
        todo: todoText,
      },
    ]);

    setTodoText('');
  };

  const handleDelete = (todoId) => {
    setTodoItems(
      todoItems.filter((item) => item.id !== todoId),
    );
  };

  return (
    <div>
      <p>assignment2</p>
      <h3>To-do</h3>
      <TodoForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        todoText={todoText}
      />
      <Todos todoItems={todoItems} onClick={handleDelete} />
    </div>
  );
}

export default App;
