import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function Todopage({
  inputText, todos, onClickAddTodo, onClickCompleteTodo, onChangeInputText,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        inputText={inputText}
        onClickAddTodo={onClickAddTodo}
        onChangeInputText={onChangeInputText}
      />
      <TodoList
        todos={todos}
        onClickCompleteTodo={onClickCompleteTodo}
      />
    </div>
  );
}

export default Todopage;
