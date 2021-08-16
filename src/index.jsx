import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const INITIAL_STATE = {
  input: '',
  todos: [],
};

function App() {
  const [state, setState] = useState(INITIAL_STATE);

  const handledTodoInput = (e) => {
    const todoText = e.target.value;

    setState((prevState) => ({
      ...prevState,
      input: todoText,
    }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
      text: state.input,
      done: false,
    };

    setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      input: '',
    }));

    e.target[0].value = '';
  };

  const handleTodoDone = (id) => {
    setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  return (
    <>
      <h1>To-do</h1>
      <ol>
        {state.todos.length ? state.todos.map(({ id, text }) => (
          <li key={id}>
            {text}
            <button
              type="button"
              onClick={() => handleTodoDone(id)}
            >
              완료
            </button>
          </li>
        )) : '할 일이 없어요!'}
      </ol>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="할 일을 입력해주세요" onChange={handledTodoInput} />
        <input type="submit" value="추가" />
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
