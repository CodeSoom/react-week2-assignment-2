import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleChange(e) {
    const todoValue = e.target.value;
    setTodo(todoValue);
  }

  function handleClick() {
    setTodo('');
    setTodoList([...todoList, todo]);
  }

  return (
    <div>
      <p>To-do</p>
      <div>
        <Input
          onChange={handleChange}
          value={todo}
        />
        <Button onClick={handleClick}>추가</Button>
      </div>
      <TodoList
        todoList={todoList}
      />
    </div>
  );
}
