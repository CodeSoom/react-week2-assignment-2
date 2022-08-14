import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: uuidv4(),
    todoTitle: '',
    todos: [],
  });

  const { newId, todoTitle, todos } = state;

  function handleChangeTitle(e) {
    setState({
      ...state,
      todoTitle: e.target.value,
    });
  }

  function handleAddClick() {
    setState({
      ...state,
      newId: uuidv4(),
      todoTitle: '',
      todos: [...todos, { id: newId, title: todoTitle }],
    });
  }

  function handleDoneClick(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <Page
        todoTitle={todoTitle}
        onChangeTitle={handleChangeTitle}
        onAddClick={handleAddClick}
        todos={todos}
        onDoneClick={handleDoneClick}
      />
    </div>
  );
}
