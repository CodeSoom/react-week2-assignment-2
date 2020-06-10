import React, { useState } from 'react';

import Todo from './Todo';
import Form from './Form';

function TodoList() {
  const [state, setState] = useState({
    todos: [],
    value: '',
    isEmpty: false,
  });

  const { todos, value, isEmpty } = state;

  const onChange = (e) => setState({
    ...state,
    value: e.target.value,
    isEmpty: false,
  });

  const onAddTodo = () => {
    if (!value) {
      setState({
        ...state,
        isEmpty: true,
      });
      return;
    }
    setState({
      ...state,
      todos: [...state.todos, { id: new Date().getTime(), task: value }],
      value: '',
    });
  };

  const onCompleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setState({
      ...state,
      todos: filteredTodos,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  };

  return (
    <div>
      <Form onSubmit={onSubmit} value={value} onChange={onChange} isEmpty={isEmpty} />
      {todos.length ? todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          todo={todo}
          onCompleteTodo={() => onCompleteTodo(todo.id)}
        />
      )) : <span>할 일이 없어요!</span>}
    </div>
  );
}

export default TodoList;
