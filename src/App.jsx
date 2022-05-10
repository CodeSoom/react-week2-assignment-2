import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoLists from './TodoLists';

const initialState = {
  id: '',
  text: '',
};

function App() {
  const [inputText, setInputText] = useState(initialState);
  const [todoLists, setTodoLists] = useState([]);

  function handleChangeInputText(e) {
    const { value } = e.target;

    setInputText({
      id: new Date().getMilliseconds(),
      text: value,
    });
  }

  function handleAddTodoList(e) {
    e.preventDefault();
    setTodoLists([...todoLists, inputText]);
    setInputText(initialState);
  }

  function handleCompleteTodoList(todoListId) {
    const filteredTodoLists = todoLists.filter((todoList) => todoList.id !== todoListId);
    setTodoLists(filteredTodoLists);
  }

  return (
    <div>
      <p>To-do</p>
      <TodoInput
        onChange={handleChangeInputText}
        onSubmit={handleAddTodoList}
        inputText={inputText}
      />
      <div style={{ marginTop: '20px' }}>
        {
          todoLists.length
            ? <TodoLists todoLists={todoLists} onClick={handleCompleteTodoList} />
            : <div>할일이 없어요!</div>
        }
      </div>
    </div>
  );
}

export default App;
