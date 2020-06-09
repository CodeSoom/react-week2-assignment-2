import React, { useState } from 'react';

import TodoListForm from './TodoListForm';
import TodoList from './TodoList';

export default function Todo() {
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

  const handleInput = (e) => {
    setState({ ...state, input: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClickAddTodo();
    }
  };

  return (
    <div>
      <h1>
        To-Do
        (
        {todoList.length}
        )
      </h1>

      <TodoListForm
        input={input}
        onChange={handleInput}
        onClick={handleClickAddTodo}
        onKeyPress={handleKeyPress}
      />
      <TodoList list={todoList} handleRemove={handleClickRemoveTodo} />
    </div>
  );
}
