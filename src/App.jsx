import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [nextId, setNextId] = useState(1);

  function onChangeTodo(e) {
    setTodo(e.target.value);
  }
  function onClickSubmit(e) {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: nextId,
        content: todo,
      },
    ]);
    setNextId(nextId + 1);
    setTodo('');
  }
  function onClickFinish(target) {
    setTodoList(todoList.filter((prevTodo) => prevTodo.id !== target));
  }

  return (
    <>
      <TodoInput todo={todo} onChange={onChangeTodo} handleSubmit={onClickSubmit} />
      <TodoList todoList={todoList} onClick={onClickFinish} />
    </>
  );
}
