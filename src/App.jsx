import React, { useState } from 'react';
import TodoPage from './pages/TodoPage';

function App() {
  const [state, setState] = useState({
    inputText: '',
    todos: [],
    nextTodoId: 0,
  });

  const { inputText, todos, nextTodoId } = state;

  function handleClickAddTodo(todoText) {
    if (todoText !== '') {
      setState({
        inputText: '',
        todos: [...todos, { id: nextTodoId, text: todoText.trim() }],
        nextTodoId: nextTodoId + 1,
      });
    }
  }

  function handleClickCompleteTodo(completedTodoId) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== completedTodoId),
    });
  }

  function handleInputChange(event) {
    setState({
      ...state,
      inputText: event.target.value,
    });
  }

  return (
    <TodoPage
      inputText={inputText}
      todos={todos}
      onClickAddTodo={handleClickAddTodo}
      onClickCompleteTodo={handleClickCompleteTodo}
      onChangeInputText={handleInputChange}
    />
  );
}

export default App;
