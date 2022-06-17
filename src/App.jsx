import { useEffect, useState } from 'react';

import useInput from './hooks/useInput';

import isEmpty from './utils/isEmpty';

import Todo from './pages/Todo';

export default function App() {
  const [todo, handleChangeTodo, setTodo] = useInput('');
  const [disabled, setDisabled] = useState(false);

  const { inputValue: inputTodo, contents: todos } = todo;

  useEffect(() => {
    setDisabled(inputTodo === '');
  }, [inputTodo]);

  const createTodo = (entered) => {
    const newTodo = {
      id: window.crypto.getRandomValues(new Uint32Array(1))[0],
      todo: entered,
    };

    setTodo({
      ...todos,
      contents: [...todos, newTodo],
      inputValue: '',
    });
  };

  const completeTodo = (id) => {
    const targetTodo = todos.filter((target) => target.id !== id);

    setTodo({ ...todo, contents: targetTodo });
  };

  return (
    <Todo
      inputTodo={inputTodo}
      handleChangeTodo={handleChangeTodo}
      createTodo={createTodo}
      completeTodo={completeTodo}
      todos={todos}
      disabled={disabled}
      isEmpty={isEmpty}
    />
  );
}
