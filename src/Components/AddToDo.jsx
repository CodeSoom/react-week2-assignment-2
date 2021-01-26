import React from 'react';

function AddToDo({ text, list, setToDo }) {
  const handleOnChange = (e) => {
    setToDo({
      text: e.target.value,
      list: [...list],
    });
  };

  const handleAddButton = () => {
    setToDo({
      text: '',
      list: [...list, text],
    });
  };

  return (
    <p>
      <input type="text" value={text} placeholder="할 일을 입력해 주세요!" onChange={handleOnChange} />
      <button type="button" onClick={handleAddButton}>
        추가
      </button>
    </p>
  );
}

export default AddToDo;
