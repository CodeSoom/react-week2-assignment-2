import React from 'react';

function AddToDo({ onClick }) {
  const handleOnChange = (e) => {
    console.log(`${e.target.value}: changed`);
    e.target.name = e.target.value;
    console.log(`${e.target.name}: name`);
    onClick(e.target.value);
  };

  // const handleAddButton = (e) => {
  // };

  return (
    <p>
      <input type="text" name="toDo" placeholder="할 일을 입력해 주세요!" onChange={handleOnChange} />
      <button type="button">
        추가
      </button>
    </p>
  );
}

export default AddToDo;
