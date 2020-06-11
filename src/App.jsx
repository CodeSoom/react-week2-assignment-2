import React, { useState } from 'react';
import Todopage from './pages/Todopage';

function App() {
  const [state, setState] = useState({
    inputText: '',
    todos: [],
    nextTodoID: 0,
  });

  const { inputText, todos, nextTodoID } = state;

  function handleClickAddTodo(todoText, todoID) {
    if (todoText !== '') {
      setState({
        inputText: '',
        todos: [...todos, { id: todoID, text: todoText.trim() }],
        nextTodoID: todoID + 1,
      });
    }
  }

  function handleClickCompleteTodo(completedTodo) {
    setState({
      inputText,
      todos: todos.filter((todo) => todo.id !== completedTodo.id),
      nextTodoID,
    });
  }

  function handleInputChange(event) {
    setState({
      inputText: event.target.value,
      todos,
      nextTodoID,
    });
  }

  return (
    <Todopage
      inputText={inputText}
      todos={todos}
      nextTodoID={nextTodoID}
      onClickAddTodo={handleClickAddTodo}
      onClickCompleteTodo={handleClickCompleteTodo}
      onChangeInputText={handleInputChange}
    />
  );
}

export default App;
