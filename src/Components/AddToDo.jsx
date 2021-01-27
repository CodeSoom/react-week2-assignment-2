import React from 'react';

function AddToDo({ todoText, todoList, setTodo }) {
  const handleOnChange = (e) => {
    setTodo({
      todoText: e.target.value,
      todoList: [...todoList],
    });
  };

  const handleAddButton = () => {
    setTodo({
      todoText: '',
      todoList: [...todoList, todoText],
    });
  };

  return (
    <p>
      <input type="text" value={todoText} placeholder="할 일을 입력해 주세요!" onChange={handleOnChange} />
      <button type="button" onClick={handleAddButton}>
        추가
      </button>
    </p>
  );
}

export default AddToDo;
