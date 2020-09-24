import React, { useState } from 'react';

import Page from './Page';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChangeText({ input }) {
    setText(input);
  }

  function handleClickAddTask() {
    if (!text) throw new Error('No content!');

    setTasks([...tasks, { id: count, text }]);
    setCount(count + 1);
    setText('');
  }

  function handleClickDeleteTask({ id }) {
    setTasks(tasks.filter((todo) => todo.id !== id));
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
