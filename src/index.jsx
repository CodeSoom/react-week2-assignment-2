import { useState } from 'react';
import ReactDOM from 'react-dom';

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Todo({ children, index, onClick }) {
  return (
    <div>
      <span>
        {index + 1}
        .
        {children}
      </span>

      <Button onClick={() => onClick(index)}>
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
          key={todo} // [질문] 이 경우 동일한 todo일 때 문제가 생기는데, 적절한 key값을 어떻게 설정해주어야 할까요?
          index={index}
          onClick={onClick}
        >
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

  function handleClick() {
    onClick(todo);
    setTodo('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={todo}
        onChange={(event) => handleChange(event.target.value)}
      />

      <Button onClick={() => handleClick(todo, onClick)}>
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
