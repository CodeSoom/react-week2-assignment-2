import { useState } from 'react';
import ToDoForm from './components/ToDoForm';

import ToDos from './components/ToDos';

export default function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeInputValue = (event) => {
    setTodoText(event.target.value);
  };

  const handleClickAddTodo = () => {
    if (!todoText) {
      return;
    }
    setTodos([...todos, todoText]);
    setTodoText('');
  };

  const handleClickRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo !== id));
  };

  return (
    <section>
      <h1>To-do</h1>
      <ToDoForm
        todo={todoText}
        onChange={handleChangeInputValue}
        onClick={handleClickAddTodo}
      />
      <ToDos todos={todos} onClick={handleClickRemoveTodo} />
    </section>
  );
}
