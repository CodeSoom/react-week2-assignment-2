import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleChange(e) {
    const todoValue = e.target.value;
    setTodo(todoValue);
  }

  function todoListAdd() {
    setTodo('');
    setTodoList([...todoList, todo]);
  }

  function todoListFinish(value) {
    const updateTodoList = [...todoList].filter(
      (element) => element !== value,
    );
    setTodoList(updateTodoList);
  }

  return (
    <div className="todo-wrap">
      <h1 className="todo-title">To-do</h1>
      <div className="todo-input">
        <TodoInput
          todo={todo}
          onClick={todoListAdd}
          onChange={handleChange}
        />
      </div>
      <TodoList
        todoList={todoList}
        onClick={todoListFinish}
      />
    </div>
  );
}
