import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    todolist: '',
  });
  const { todolist } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      todolist,
    };
    setTodos(todos.concat(todo));

    setInputs({
      todolist: '',
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        todolist={todolist}
        onChange={onChange}
        onCreate={onCreate}
      />
      <TodoList todos={todos} />
    </>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
