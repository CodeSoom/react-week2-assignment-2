import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodoItem = ({ todo }) => {
    setTodos([
      ...todos,
      {
        id: [...todo].reduce((acc, v) => acc + v.charCodeAt(0), 0)
        + Math.floor(Math.random() * 999)
        + todo[0],
        todo,
      },
    ]);
  };

  const handleRemoveTodoItem = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoApp
      todos={todos}
      onAddTodoItem={handleAddTodoItem}
      onRemoveTodoItem={handleRemoveTodoItem}
    />
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
