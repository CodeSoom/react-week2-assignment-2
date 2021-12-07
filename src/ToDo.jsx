import React, { useRef } from 'react';
import ToDoList from './ToDoList';

const ToDo = ({ list, removeHandler, appendHandler }) => {
  const inputRef = useRef(null);
  const onClickAppend = () => {
    appendHandler(inputRef.current.value);
    inputRef.current.value = '';
  };
  return (
    <>
      <h1>To-do</h1>
      <div>
        <input placeholder="할 일을 입력해 주세요" ref={inputRef} />
        <button type="button" onClick={onClickAppend}>
          추가
        </button>
      </div>
      <ToDoList list={list} />
    </>
  );
};

export default ToDo;
