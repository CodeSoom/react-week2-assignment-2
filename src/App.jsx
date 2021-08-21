import React, { useState} from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [
      { id: 1, title: '커피 마시기' },
      { id: 2, title: '밥 먹기' },
    ],
  });

  const { newId, tasks, taskTitle } = state; // 꺼내는 부분

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    })
  }

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      taskTitle: '', // 입력창에 값을 입력하면, 입력창에서 사라지도록 처리
      tasks: [...tasks, { id: newId, title: taskTitle}],
    })
  }

  function handleClickDeleteTask(id) {
    console.log(id);
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    })
  }
  
  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks} 
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
