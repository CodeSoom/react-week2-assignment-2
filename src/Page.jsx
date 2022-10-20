import React from 'react';
import TodoList from './Todo/TodoList';
import Todos from './Todo/Todos';

const Page = ({
  values, handleChange, onSubmit, todos, deleteTodoButton,
}) => (
  <div>
    <h1>To-do</h1>
    <TodoList
      values={values}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
    {
      todos.length === 0
        ? <p>할 일이 없어요!</p>
        : (
          <Todos
            todos={todos}
            deleteTodoButton={deleteTodoButton}
          />
        )
    }
  </div>
);

export default Page;
