import { useState } from 'react';
import ToDoInputBlock from './components/ToDoInputBlock';

import ToDos from './components/ToDos';

export default function App() {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeInputValue = (event) => {
    setTodoInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (!todoInputValue) return;
    setTodos([...todos, todoInputValue]);
    setTodoInputValue('');
  };

  const handleRemoveTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo !== id));
  };

  return (
    <section>
      <h1>To-do</h1>
      <ToDoInputBlock
        todo={todoInputValue}
        onChange={handleChangeInputValue}
        onClick={handleAddTodo}
      />
      <ToDos todos={todos} onClick={handleRemoveTodo} />
    </section>
  );
}
