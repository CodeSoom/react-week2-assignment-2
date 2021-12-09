import { useState } from 'react';
import ReactDOM from 'react-dom';

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Todo({ children, onClick }) {
  return (
    <div>
      <span>{children}</span>
      <Button onClick={onClick}>
        완료
      </Button>
    </div>
  );
}

function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return (
      <div>
        할 일이 없어요!
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={todo}
          onClick={() => onClick(index)}
        >
          {index + 1}
          .
          {todo}
        </Todo>
      ))}
    </div>

  );
}

function Input({ onClick }) {
  const [todo, setTodo] = useState('');
  function handleChange(input) {
    setTodo(input);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        onChange={(event) => handleChange(event.target.value)}
      />

      <Button onClick={() => onClick(todo)}>
        추가
      </Button>
    </div>

  );
}

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <Input
          onClick={addTodo}
        />

        <Todos
          todos={todos}
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
