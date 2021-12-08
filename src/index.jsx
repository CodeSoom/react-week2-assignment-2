import { useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import Todos from './Todos';
import EmptyTodos from './EmptyTodos';
import TodoForm from './Form';

function App() {
  const [newTodoName, setNewTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const isEmpty = todos.length === 0;

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
        {isEmpty ? <EmptyTodos /> : (
          <Todos
            todos={todos}
            onDelete={handleClickDeleteTodo}
          />
        )}
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
