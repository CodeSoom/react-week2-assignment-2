import { useState } from 'react';

import Title from './components/Title';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

export default function App() {
  const [data, setData] = useState([]);
  const [createIdx, setCreateIdx] = useState(1);

  const addToDo = (inputToDo) => {
    setCreateIdx(createIdx + 1);

    const newTodo = {
      idx: createIdx,
      toDo: inputToDo,
    };

    setData([newTodo, ...data]);
  };

  const completeToDo = () => {
  // completedToDo 삭제하는 코드 작성 예정
  };

  return (
    <>
      <Title title="To-do" />
      <InputTodo onClick={addToDo} />
      <TodoList data={data} onClick={completeToDo} />
    </>
  );
}
