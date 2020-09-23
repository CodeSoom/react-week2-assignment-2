import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const initialState = {
  number: 0,
  input: '',
  todoList: [],
};

function App() {
  const [state, setState] = useState(initialState);

  const { number, input, todoList } = state;

  const handleChange = (e) => {
    setState({
      number,
      input: e.target.value,
      todoList,
    });
  };

  const handleClickInsert = () => {
    setState({
      number: number + 1,
      input: '',
      todoList: todoList.concat({
        id: number,
        text: input,
      }),
    });
  };

  const handleClickComplete = (value) => {
    setState({
      number,
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
