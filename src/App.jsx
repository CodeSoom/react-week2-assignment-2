import React, { useCallback, useState } from 'react';

import TodoListPage from './TodoListPage';

function App() {
  const [todoState, setTodoState] = useState({
    todo: '',
    todoList: [],
  });

  const { todo, todoList } = todoState;

  const handleTodoInput = useCallback(
    (e) => {
      setTodoState({ ...todoState, todo: e.target.value });
    },
    [todoState],
  );

  const handleAddTodo = useCallback(() => {
    setTodoState({ todo: '', todoList: todoList.concat(todo) });
  }, [todoState]);

  const handleDeleteTodo = useCallback(
    (index) => {
      setTodoState({
        ...todoState,
        todoList: todoList.filter((todoText) => todoText !== todoList[index]),
      });
    },
    [todoList],
  );

  return (
    <div className="wrap">
      <h1 className="title">To-do</h1>
      <br />
      <TodoListPage
        todo={todo}
        todoList={todoList}
        handleTodoInput={handleTodoInput}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
