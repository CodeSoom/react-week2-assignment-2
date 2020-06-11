import React from 'react';
import Todoinput from '../components/Todoinput';
import Todolist from '../components/Todolist';

function Todopage({
  inputText, todos, onClickAddTodo, onClickCompleteTodo, onChangeInputText,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Todoinput
        inputText={inputText}
        onClickAddTodo={onClickAddTodo}
        onChangeInputText={onChangeInputText}
      />
      <Todolist
        todos={todos}
        onClickCompleteTodo={onClickCompleteTodo}
      />
    </div>
  );
}

export default Todopage;
