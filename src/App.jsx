import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="todo-wrap">
      <h1 className="todo-title">To-do</h1>
      <div className="todo-input">
        <TodoInput
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
      <TodoList
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}
