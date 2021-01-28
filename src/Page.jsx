import React, { useState } from 'react';
import TodoList from './TodoList';

const Page = () => {
  const [inputItem, setinputItem] = useState('');
  const [submitItem, setSubmitItem] = useState([{ todo: '' }]);

  const addList = (e) => {
    e.preventDefault();
    setinputItem(e.target.value);
  };

  const handleClick = () => {
    if (!inputItem) return;
    setSubmitItem((previousItem) => [...previousItem, { todo: inputItem }]);
    setinputItem('');
  };

  return (
    <>
      <h2>Todo List</h2>
      <input placeholder="할 일을 추가하세요" value={inputItem} onChange={(e) => addList(e)} />
      <button type="button" onClick={handleClick}>추가</button>
      <TodoList submitItem={submitItem} />
    </>
  );
};

export default Page;
