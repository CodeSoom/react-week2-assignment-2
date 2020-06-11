import React from 'react';
import Todoinput from '../components/Todoinput';
import Todolist from '../components/Todolist';

function Todopage({
  inputText, todos, nextTodoID, onClickAddTodo, onClickCompleteTodo, onChangeInputText,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Todoinput
        inputText={inputText}
        nextTodoID={nextTodoID}
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
