import React, { useState } from "react";

import Page from "./Page";

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: "",
    tasks: [
      { id: 1, title: "아무것도 하지 않기 #1" },
      { id: 2, title: "아무것도 하지 않기 #2" },
    ],
  });

  const { newId, taskTitle, tasks } = state;

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      taskTitle: "",
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  // 이 표현은 정말 많이 쓰인다. 그냥 외워버려
  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return (
    <div>
      <Page
        taskTitle={taskTitle}
        onChangeTitle={handleChangeTitle}
        onClickAddTask={handleClickAddTask}
        tasks={tasks}
        onClickDeleteTask={handleClickDeleteTask}
      />
    </div>
  );
}
