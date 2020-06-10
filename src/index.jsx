import React, { useState } from 'react';
import ReactDom from 'react-dom';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [state, setState] = useState({
    todoList: [],
    input: '',
  });
  const { todoList, input } = state;

  const handleClickAddTodo = () => {
    const resetInput = {
      ...state,
      input: '',
    };
    if (input.trim() === '') {
      setState({ ...resetInput });
      return;
    }
    setState({
      ...resetInput,
      todoList: [
        ...todoList,
        {
          id: todoList.length,
          text: input,
        },
      ],
    });
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      ...state,
      todoList: todoList.filter((item) => item.id !== id),
    });
  };

  const handleChangeInput = (e) => {
    setState({ ...state, input: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickAddTodo();
  };

  return (
    <div>
      <h1>
        To-Do
        (
        {todoList.length}
        )
      </h1>

      <TodoForm
        input={input}
        onChange={handleChangeInput}
        onClick={handleClickAddTodo}
        onSubmit={handleSubmit}
      />
      <TodoList list={todoList} handleRemove={handleClickRemoveTodo} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
