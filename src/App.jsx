import { useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';
import TodoNull from './components/TodoNull';
import Todos from './components/Todos';

export default function App() {
  const [todo, setTodo] = useState({
    todoInsertInputValue: '',
    todos: [],
  });

  const { todoInsertInputValue, todos } = todo;

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      todoInsertInputValue: e.target.value,
    });
  };

  const handleClickInsertButton = () => {
    const timeNumber = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 10000000000);

    const id = timeNumber + randomNumber;

    const todoList = { text: todoInsertInputValue, id };

    setTodo({
      ...todo,
      todos: [...todo.todos, todoList],
      todoInsertInputValue: '',
    });
  };

  const handleClickCompleteButton = (id) => {
    const remainingTodoList = todos.filter((i) => i.id !== id);

    setTodo({
      ...todo,
      todos: remainingTodoList,
    });
  };

  const todosIsNull = todos.length === 0;

  return (
    <div>
      <Title>To-Do</Title>

      <Input onChange={handleInputChange} placeholder="할 일을 입력해 주세요">
        {todoInsertInputValue}
      </Input>

      <Button onClick={handleClickInsertButton}>추가</Button>

      {todosIsNull && <TodoNull />}
      {!todosIsNull && (
        <Todos todos={todos} onClick={handleClickCompleteButton} />
      )}
    </div>
  );
}
