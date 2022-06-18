import { useState } from 'react';

import Title from './components/Title';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [createdId, setCreateId] = useState(1);
  const [inputTodo, setInputTodo] = useState('');

  const addToDo = (inputToDo) => {
    setCreateId(createdId + 1);

    const newTodo = {
      id: createdId,
      toDo: inputToDo,
    };

    setTodos([newTodo, ...todos]);
  };

  const completeToDo = () => {
  // completedToDo 삭제하는 코드 작성 예정

  };

  const resetInput = () => {
    setInputTodo('');
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
      <InputTodo onClick={handleClickAddButton} inputTodo={inputTodo} setInputTodo={setInputTodo} />
      <TodoList onClick={handleClickCompleteButton} todos={todos} />
    </>
  );
}
