import React from 'react';

function TodoInput({ states }) {
  const {
    todos, setTodos, todoInput, setTodoInput,
  } = states;

  const handleChangeTodoInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleSumbitAddTodo = (event) => {
    event.preventDefault();

    const newId = todos.length === 0 ? 0 : todos.slice(-1)[0].id + 1;

    setTodos([
      ...todos,
      { id: newId, content: todoInput },
    ]);

    setTodoInput([]);
  };

  return (
    <form onSubmit={handleSumbitAddTodo}>
      <input type="text" placeholder="할 일을 입력해 주세요." value={todoInput} onChange={handleChangeTodoInput} />
      <input type="submit" value="추가" />
    </form>
  );
}

export default TodoInput;
