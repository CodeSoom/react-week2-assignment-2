import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [todoContent, setTodoContent] = useState('');
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setTodoContent(event.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, {
      id: todos.length,
      content: todoContent,
      isDone: false,
    }]);

    setTodoContent('');
  };

  const handleClickCompleteButton = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id,
          content: todo.content,
          isDone: true,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <h1>To-do</h1>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleOnChange}
        value={todoContent}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        추가
      </button>
      <ol>
        {todos.filter((todo) => !todo.isDone).map(({ id, content }) => (
          <li key={id}>
            {content}
            <button
              type="button"
              onClick={() => handleClickCompleteButton(id)}
            >
              완료
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
