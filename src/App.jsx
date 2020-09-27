import React, { useRef, useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoTitle from './TodoTitle';

function App() {
  const [input, setInput] = useState({
    todoTitle: '',
  });
  const { todoTitle } = input;

  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);

  const handleClickAddTodo = () => {
    const todo = {
      id: nextId.current,
      todoTitle,
    };
    setTodos(todos.concat(todo));

    setInput({
      todoTitle: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
  };

  return (
    <>
      <CreateTodo
        todoTitle={todoTitle}
        onChange={onChange}
        onCreate={handleClickAddTodo}
      />

      <TodoTitle
        todos={todos}
        onRemove={onRemove}
      />
    </>
  );
}

export default App;
