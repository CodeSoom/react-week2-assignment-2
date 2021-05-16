import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setStates] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [
    ],
  });
  // 디스턱쳐링?
  const { newId, tasks, taskTitle } = state;

  function handleTitleChange(event) {
    setStates({
      ...state,
      taskTitle: event.target.value,
    });
  }

  function handleClickDeleteTask(id) {
    setStates({
      ...state,
      // task.id와 id가 다른 참인 task만 tasks에 남겨둔다.
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  function inputButtonClickAddTask() {
    // TODO: 할일 추가
    setStates({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
    return null;
  }

  return (
    <Page
      taskTitle={taskTitle}
      tasks={tasks}
      onChangeTitle={handleTitleChange}
      inputButtonClick={inputButtonClickAddTask}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
