import React from 'react';
import TodoInputBox from './TodoInputBox';
import TodoList from './TodoList';

export default function TodoPage(
  {
    todos, value, onChangeInputValue, onSubmitTodoItem, onRemoveTodoItem,
  },
) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInputBox
        value={value}
        onChangeInputValue={onChangeInputValue}
        onSubmitTodoItem={onSubmitTodoItem}
      />
      {todos.length === 0
        ? <p>할 일이 없어요!</p>
        : (
          <TodoList
            todos={todos}
            onRemoveTodoItem={onRemoveTodoItem}
          />
        )}
    </div>
  );
}
