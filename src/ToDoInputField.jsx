import { useState } from 'react';

export default function ToDoInputField({ appendToDoHandler }) {
  const [newToDoValue, setNewToDoValue] = useState('');

  const onClickAppendToDo = () => {
    appendToDoHandler(newToDoValue);
    setNewToDoValue('');
  };

  const onChangeInput = ({ target: { value } }) => {
    setNewToDoValue(value);
  };

  const onSubmitNewToDo = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitNewToDo}>
      <input value={newToDoValue} placeholder="할 일을 입력해 주세요" onChange={onChangeInput} />
      <button onClick={onClickAppendToDo} type="submit">
        추가
      </button>
    </form>
  );
}
