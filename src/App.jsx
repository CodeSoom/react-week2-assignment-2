import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const initialState = {
  input: '',
  todoList: [],
};

function App() {
  const [state, setState] = useState(initialState);

  const { input, todoList } = state;

  const handleChange = (e) => {
    setState({
      input: e.target.value,
      todoList,
    });
  };

  const handleClickInsert = () => {
    setState({
      input: '',
      todoList: todoList.concat(input),
    });
  };

  const handleClickComplete = (value) => {
    setState({
      input,
      todoList: todoList.filter((todo, i) => i !== value),
    });
  };

  return (
    <div>
      <h1>To-do</h1>
      <CreateTodo
        input={input}
        onChange={handleChange}
        onClick={handleClickInsert}
      />
      <TodoList todoList={todoList} onClick={handleClickComplete} />
    </div>
  );
}

export default App;
