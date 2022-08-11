import React, { useState } from 'react';
import MakeDoList from './makeDoList';
import AddDo from './addDo';

function ToDo() {
  const [doList, setDoList] = useState([]);
  const [inputTodoText, setInputTodoText] = useState('');

  return (
    <>
      <p>To-do</p>
      <AddDo
        inputTodoText={inputTodoText}
        setInputTodoText={setInputTodoText}
        setDoList={setDoList}
        doList={doList}
      />
      <br />
      <MakeDoList doList={doList} setDoList={setDoList} />
    </>
  );
}

export default ToDo;
