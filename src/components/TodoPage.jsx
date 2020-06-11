import React from 'react';
import TodoInputBox from './TodoInputBox';
import TodoList from './TodoList';

export default function TodoPage(
  {
    todos, value, onChangeInputValue, onSubmitAddTodo, onClickRemoveTodo,
  },
) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInputBox
        value={value}
        onChangeInputValue={onChangeInputValue}
        onSubmitAddTodo={onSubmitAddTodo}
      />
      {todos.length === 0
        ? <p>할 일이 없어요!</p>
        : (
          <TodoList
            todos={todos}
            onClickRemoveTodo={onClickRemoveTodo}
          />
        )}
    </div>
  );
}
