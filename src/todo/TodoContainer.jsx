import React from 'react';

import TodoItem from './TodoItem';
import EmptyPlaceHolder from './EmptyPlaceHolder';
import TodoForm from './TodoForm';

export default function TodoContainer({
  todoItems, onTodoDone, currentTodo, onChangeTodo, onSubmit,
}) {
  return (
    <>
      <TodoForm
        currentTodo={currentTodo}
        onChangeTodo={onChangeTodo}
        onSubmit={onSubmit}
      />
      { todoItems.length === 0 && <EmptyPlaceHolder /> }
      { todoItems.length !== 0 && todoItems.map((todoItem, index) => (
        <TodoItem
          key={`${todoItem}.${String(index)}`}
          index={index}
          todoItem={todoItem}
          onTodoDone={onTodoDone}
        />
      ))}
    </>
  );
}
