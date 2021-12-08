import { useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import EmptyTodos from './EmptyTodos';
import TodoForm from './Form/TodoForm';

function App() {
  const [newTodoName, setNewTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChangeNewTodo({ target: { value } }) {
    setNewTodoName(value);
  }

  function handleSubmitNewTodo(e) {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, { id: uuid(), name: newTodoName, done: false }]);
    setNewTodoName('');
  }

  function handleClickDeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoForm value={newTodoName} onChange={handleChangeNewTodo} onSubmit={handleSubmitNewTodo} />
      <p>
        {todos.length === 0 ? <EmptyTodos /> : (
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.name}
                <button type="button" onClick={() => handleClickDeleteTodo(todo.id)}>완료</button>
              </li>
            ))}
          </ol>
        )}

      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
