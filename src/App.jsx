import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    note: '',
    todoList: [],
  });

  const { note, todoList } = state;

  function handleClick() {
    const keyId = uuidv4();
    const todo = {
      taskId: keyId,
      task: note,
    };
    setState({
      todoList: [...todoList, todo],
      note: '',
    });
  }

  function handleChange(e) {
    setState({
      note: e.target.value,
      todoList,
    });
  }

  function handleConfirm(selectedItem) {
    const filteredList = todoList
      .filter((item) => (item.taskId !== selectedItem.taskId));

    setState({
      todoList: filteredList,
    });
  }

  return (
    <div>
      <Page
        note={note}
        todoList={todoList}
        onChangeWriteTodo={handleChange}
        onClickAddTodo={handleClick}
        onClickConfirm={handleConfirm}
      />
    </div>

  );
}
