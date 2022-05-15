import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoLists from './TodoLists';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    title: '',
    todos: [],
  });

  const { newId, title, todos } = state;

  function handleChangeTodoInput(e) {
    const { value } = e.target;

    setState({
      ...state,
      title: value,
    });
  }

  function handleAddTodoList(e) {
    e.preventDefault();
    setState({
      ...state,
      newId: newId + 1,
      todos: [...todos, { id: newId, title }],
      title: '',
    });
  }

  function handleCompleteTodoList(todoListId) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== todoListId),
    });
  }

  return (
    <div>
      <p>To-do</p>
      <TodoInput
        onChangeTitle={handleChangeTodoInput}
        onSubmit={handleAddTodoList}
        todoInput={title}
      />
      <div style={{ marginTop: '20px' }}>
        <TodoLists todos={todos} onClickAddTask={handleCompleteTodoList} />
      </div>
    </div>
  );
}
