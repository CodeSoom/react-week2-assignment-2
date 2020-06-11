import React, { useState } from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Todo() {
  const [state, setState] = useState({
    todoList: [],
    input: '',
    id: 0,
  });
  const { todoList, input } = state;

  const handleChangeInput = ({ target: { value } }) => {
    setState({
      ...state,
      input: value,
    });
  };

  const handleClickAddTodo = () => {
    if (input.trim() !== '') {
      setState((prevState) => ({
        ...state,
        input: '',
        id: prevState.id + 1,
        todoList: [
          ...todoList,
          {
            id: state.id,
            text: input,
          },
        ],
      }));
    }
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      ...state,
      todoList: todoList.filter((item) => item.id !== id),
    });
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
        onChangeInput={handleChangeInput}
        onClickSubmitButton={handleClickAddTodo}
        onSubmit={handleSubmit}
      />
      <TodoList
        todoList={todoList}
        onClicktoRemove={handleClickRemoveTodo}
      />
    </div>
  );
}
