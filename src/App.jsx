import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    value: '',
    tasks: [{
      id: 1,
      title: '',
    }],
  });

  function handleChange(event) {
    setState({
      ...state,
      value: event.target.value,
    });
  }

  const [todoList, setTodoList] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    if (state.value === '') return;

    setTodoList([...todoList, { value: state.value }]);
    setState({ value: '' });
  }

  function handleClickDone(index) {
    return setTodoList(
      [...todoList.slice(0, index), ...todoList.slice(index + 1, todoList.length)],
    );
  }

  return (
    <Page
      value={state.value}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      todoList={todoList}
      handleClickDone={handleClickDone}
    />
  );
}

export default App;
