import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const initialState = {
  id: 0,
  input: '',
  todoList: [],
};

function App() {
  const [state, setState] = useState(initialState);

  const { id, input, todoList } = state;

  const handleChange = (e) => {
    setState({
      id,
      input: e.target.value,
      todoList,
    });
  };

  const handleClickInsert = () => {
    setState({
      id: id + 1,
      input: '',
      todoList: todoList.concat({
        id,
        text: input,
      }),
    });
  };

  const handleClickComplete = (value) => {
    setState({
      id,
      input,
      todoList: todoList.filter((todo) => todo.id !== value),
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
