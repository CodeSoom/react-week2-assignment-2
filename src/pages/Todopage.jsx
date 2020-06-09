import React from 'react';
import Todoinput from '../components/Todoinput';
import Todolist from '../components/Todolist';

function Todopage({ inputText, addClick, handleChange }) {
  return (
    <div>
      <h1>To-do</h1>
      <Todoinput
        inputText={inputText}
        onClick={addClick}
        onChange={handleChange}
      />
      <Todolist />
    </div>
  );
}

export default Todopage;
