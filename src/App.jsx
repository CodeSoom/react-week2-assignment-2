import { useState } from 'react';

import Title from './components/Title';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);
  const [todoTitle, setTodoTitle] = useState('');

  const addToDo = (inputToDo) => {
    setTodoId(todoId + 1);

    const newTodo = {
      id: todoId,
      toDo: inputToDo,
    };

    setTodos([newTodo, ...todos]);
  };

  const completeToDo = (targetToDo) => {
    const filteredTodos = todos.filter((item) => item.id !== targetToDo.id);

    setTodos(filteredTodos);
  };

  const resetInput = () => {
    setTodoTitle('');
  };

  const handleClickAddButton = (inputToDo) => {
    resetInput();

    addToDo(inputToDo);
  };

  const handleClickCompleteButton = (targetToDo) => {
    completeToDo(targetToDo);
  };

  return (
    <>
      <Title title="To-do" />
      <InputTodo
        onClick={handleClickAddButton}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
      />
      <TodoList
        onClick={handleClickCompleteButton}
        todos={todos}
      />
    </>
  );
}
