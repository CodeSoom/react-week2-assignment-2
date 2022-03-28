import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import Message from './components/Message';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Title />
      <TodoForm
        setTodos={setTodos}
      />
      {todos.length > 0 ? (
        <ol>
          {todos.map((todo) => (
            <Todo content={todo} />
          ))}
        </ol>
      ) : (
        <Message />
      )}
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
