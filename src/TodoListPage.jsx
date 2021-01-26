import React, { useCallback, useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoListPage() {
  const [TodoState, setTodoState] = useState({
    todo: '',
    todoList: [],
  });

  const { todo, todoList } = TodoState;

  const handleTodoInput = useCallback(
    (e) => {
      setTodoState({ ...TodoState, todo: e.target.value });
    },
    [TodoState],
  );

  const handleAddTodo = useCallback(() => {
    setTodoState({ todo: '', todoList: todoList.concat(todo) });
  }, [TodoState]);

  const handleDeleteTodo = useCallback(
    (indexToDelete) => {
      setTodoState({
        todo: '',
        todoList: todoList.filter(
          (todoText) => todoText !== todoList[indexToDelete],
        ),
      });
    },
    [todoList],
  );

  return (
    <div className="to-do-list-page">
      <TodoInput
        todo={todo}
        onClick={handleAddTodo}
        onChange={handleTodoInput}
      />
      <br />
      <TodoList todoList={todoList} onClick={handleDeleteTodo} />
    </div>
  );
}

export default TodoListPage;
