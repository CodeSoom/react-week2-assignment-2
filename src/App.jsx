import { useEffect, useState } from 'react';

import useInput from './hooks/useInput';

import Todo from './pages/Todo';

import nothingContents from './utils/nothingContents';

export default function App() {
  const [todo, todoHandler, setTodo] = useInput('');
  const [todos, setTodos] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (todo === '') {
      setDisabled(true);
    }
    if (todo !== '') {
      setDisabled(false);
    }
  }, [todo, setDisabled]);

  const createTodo = (contents) => {
    const newTodo = {
      id: window.crypto.getRandomValues(new Uint32Array(1))[0],
      todo: contents,
    };

    setTodos([...todos, newTodo]);

    setTodo('');
  };

  const compelteTodo = (id) => {
    const targetTodo = todos.filter((target) => target.id !== id);

    setTodos(targetTodo);
  };

  const emptyTodo = () => {
    if (nothingContents(todos)) {
      return <p>할 일이 없어요!</p>;
    }
    return false;
  };

  return (
    <Todo
      todo={todo}
      todoHandler={todoHandler}
      createTodo={createTodo}
      compelteTodo={compelteTodo}
      todos={todos}
      emptyTodo={emptyTodo}
      disabled={disabled}
    />
  );
}
