import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    todos: [
      { id: 0, todoName: '과제1' },
      { id: 1, todoName: '과제2' },
    ],
  });

  const { todos } = state;

  function onClickCompleteTodo(completedTodo) {
    const updatedTodos = todos.filter((todo) => todo.id !== completedTodo.id);
    setState({
      ...state,
      todos: updatedTodos,
    });
  }

  return (
    <>
      <h1>To-do</h1>
      <form>
        <input type="text" />
        <button type="button">추가</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todoName}
            <button type="button" onClick={() => onClickCompleteTodo(todo)}>완료</button>
          </li>
        ))}
      </ol>
    </>
  );
}
