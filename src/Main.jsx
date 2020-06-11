import React from 'react';

import Title from './Title';
import InputTask from './InputTask';
import TodoList from './TodoList';

function Main({
  state, handleInputText, handleAddTask, handleDeleteTask,
}) {
  const { toDos, inputText } = state;

  return (
    <div>
      <Title
        title="To-do"
      />
      <InputTask
        inputText={inputText}
        handleInputText={handleInputText}
        handleAddTask={handleAddTask}
      />
      <TodoList
        toDos={toDos}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default Main;
