import React from 'react';

import Title from './Title';
import InputTask from './InputTask';
import TodoList from './TodoList';

function MainPage({
  state, handleChangeText, handleClickAddTask, handleClickDeleteTask,
}) {
  const { todos, inputText } = state;

  return (
    <div>
      <Title
        title="To-do"
      />
      <InputTask
        inputText={inputText}
        handleChangeText={handleChangeText}
        handleClickAddTask={handleClickAddTask}
      />
      <TodoList
        todos={todos}
        handleClickDeleteTask={handleClickDeleteTask}
      />
    </div>
  );
}

export default MainPage;
