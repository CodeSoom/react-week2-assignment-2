import React, { useState } from 'react';

import Page from './Page';

const App = () => {
  const [state, setState] = useState({ count: 0, text: '', tasks: [] });
  const { count, text, tasks } = state;

  function handleChangeText({ input }) {
    setState({ ...state, text: input });
  }

  function handleClickAddTask() {
    if (!text) throw new Error('No content!');

    setState({
      ...state, count: count + 1, text: '', tasks: [...tasks, { id: count, text }],
    });
  }

  function handleClickDeleteTask({ id }) {
    setState({ ...state, tasks: tasks.filter((todo) => todo.id !== id) });
  }

  return (
    <Page
      text={text}
      onChangeText={handleChangeText}
      tasks={tasks}
      onClickAddTask={handleClickAddTask}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
};

export default App;
