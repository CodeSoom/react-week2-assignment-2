import React, { useState } from 'react';

import UpdatableTodoList from './UpdatableTodoList';

export default function App() {
  const [state, setState] = useState({
    newTask: '',
    tasks: [
    ],
  });

  const { newTask, tasks } = state;

  const addTask = () => {
    setState({
      newTask: '',
      tasks: [...tasks, {
        id: new Date().toISOString(),
        name: newTask,
      }],
    });
  };

  const deleteTask = (id) => {
    setState({
      ...state,
      tasks: tasks.filter(({ id: taskId }) => taskId !== id),
    });
  };

  const changeNewTask = (source) => {
    setState({
      ...state,
      newTask: source,
    });
  };

  return (
    <UpdatableTodoList
      changeNewTask={changeNewTask}
      addTask={addTask}
      deleteTask={deleteTask}
      newTask={newTask}
      tasks={tasks}
    />
  );
}
