import React, { useState } from 'react';
import ReactDom from 'react-dom';

import Todo from './pages/Todo';

function App() {
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
    <Todo
      todoList={todoList}
      input={input}
      handleChangeInput={handleChangeInput}
      handleClickAddTodo={handleClickAddTodo}
      handleClickRemoveTodo={handleClickRemoveTodo}
      handleSubmit={handleSubmit}
    />
  );
}

ReactDom.render(<App />, document.getElementById('app'));
