import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    todos: [
      // { id: 1, todoName: '과제1' },
      // { id: 2, todoName: '과제2' },
    ],
    newTodo: { id: 1, todoName: '' },
  });

  const { todos, newTodo } = state;

  function handleClickCompleteTodo(completedTodo) {
    const updatedTodos = todos.filter((todo) => todo.id !== completedTodo.id);
    setState({
      ...state,
      todos: updatedTodos,
    });
  }

  function handleTypeNewTodo(event) {
    setState({
      ...state,
      newTodo: { ...newTodo, todoName: event.target.value },
    });
  }

  function handleClickAddTodo() {
    setState({
      ...state,
      todos: [
        ...todos,
        newTodo,
      ],
      newTodo: { id: newTodo.id + 1, todoName: '' },
    });
  }

  return (
    <>
      <h1>To-do</h1>
      <form>
        <input type="text" placeholder="할 일을 입력해 주세요" onChange={handleTypeNewTodo} value={newTodo.todoName} />
        <button type="button" onClick={handleClickAddTodo}>추가</button>
      </form>
      {todos.length !== 0
        ? (
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.todoName}
                <button type="button" onClick={() => handleClickCompleteTodo(todo)}>완료</button>
              </li>
            ))}
          </ol>
        )
        : <p>할 일이 없어요!</p>}
    </>
  );
}
