import { useState } from 'react';
import Page from './Page';

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
    <Page
      todos={todos}
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
      handleClickAddButton={handleClickAddButton}
      handleClickCompleteButton={handleClickCompleteButton}
    />
  );
}
