import { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todo, setTodo] = useState({
    id: null,
    content: '',
  });

  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo({
      id: Date.now(),
      content: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.content === '') {
      return;
    }
    setTodoList([...todoList, { id: todo.id, content: todo.content }]);

    setTodo({
      id: null,
      content: '',
    });
  };

  const handleDelete = (id) => {
    setTodoList([...todoList].filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoForm
        todo={todo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TodoList todoList={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
