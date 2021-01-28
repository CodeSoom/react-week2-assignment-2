import React, { useState } from 'react';
import TodoList from './TodoList';

const Page = () => {
  const [inputItem, setInputItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const addList = (e) => {
    e.preventDefault();
    setInputItem(e.target.value);
  };

  const handleClick = () => {
    if (!inputItem) return;
    setItemList((previousItem) => [...previousItem, { todo: inputItem }]);
    setInputItem('');
  };

  return (
    <>
      <h2>Todo List</h2>
      <input placeholder="할 일을 추가하세요" value={inputItem} onChange={(e) => addList(e)} />
      <button type="button" onClick={handleClick}>추가</button>
      <TodoList itemList={itemList} setItemList={setItemList} />
    </>
  );
};

export default Page;
