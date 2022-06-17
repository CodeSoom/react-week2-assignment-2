import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from './components/common/Button';
import Input from './components/common/Input';

import TodosView from './components/todo/TodosView';

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
    const todoList = { text: todoInsertInputValue, id: uuidv4() };

    setTodo({
      ...todo,
      todos: [...todo.todos, todoList],
      todoInsertInputValue: '',
    });
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') { handleClickInsertButton(); }
  };

  const handleClickCompleteButton = (id) => {
    const remainingTodoList = todos.filter((i) => i.id !== id);

    setTodo({
      ...todo,
      todos: remainingTodoList,
    });
  };

  return (
    <div>
      <h1>To-Do</h1>

      <Input
        onKeyPress={handleEnter}
        onChange={handleInputChange}
        placeholder="할 일을 입력해 주세요"
      >
        {todoInsertInputValue}
      </Input>

      <Button onClick={handleClickInsertButton}>추가</Button>

      <TodosView todos={todos} onClick={handleClickCompleteButton} />

    </div>
  );
}
