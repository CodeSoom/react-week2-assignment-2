import { useState } from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';
import TodoNull from './components/TodoNull';
import Todos from './components/Todos';

export default function App() {
  const [state, setState] = useState({
    inputValue: '',
    todoList: [],
  });

  const { inputValue, todoList } = state;

  const handleInputChange = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleClickInsertButton = () => {
    const list = todoList;
    list.push({ text: inputValue, index: list.length });

    setState({
      todoList: list,
      inputValue: '',
    });
  };

  const handleClickCompleteButton = (index) => {
    const list = todoList;
    list.splice(index, 1);

    setState({
      ...state,
      todoList: list,
    });
  };

  const todoListIsNull = todoList.length === 0;

  return (
    <div>
      <Title>To-Do</Title>
      <Input onChange={handleInputChange} placeholder="할 일을 입력해 주세요">
        {inputValue}
      </Input>

      <Button onClick={handleClickInsertButton}>추가</Button>

      {todoListIsNull
        ? <TodoNull />
        : <Todos todoList={todoList} onClick={handleClickCompleteButton} />}
    </div>
  );
}
