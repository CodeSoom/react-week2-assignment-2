import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todoState, setTodoState] = useState({
    todo: '',
    todos: [],
  });

  function onClickSubmit(e) {
    e.preventDefault();
    setTodoState(
      ({
        todo: '',
        todos: [...todoState.todos, e.target[0].value],
      }),
    );
  }

  function onClickFinish(target) {
    setTodoState({
      ...todoState,
      todos: todoState.todos.filter((prev) => prev !== target),
    });
  }

  return (
    <>
      <TodoInput todoState={todoState} setTodoState={setTodoState} onClick={onClickSubmit} />
      <TodoList todoState={todoState} onClick={onClickFinish} />
    </>
  );
}
