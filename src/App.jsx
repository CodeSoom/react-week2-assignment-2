import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    todoTitle: '',
    todos: [],
  });

  const { newId, todoTitle, todos } = state;

  const [text, setText] = useState('')

  function handleChangeTitle(e) {
    setState({
      ...state,
      todoTitle: e.target.value,
    });
  }

  function handleAddClick() {
    setState({
      ...state,
      newId: newId +1,
      todos: [...todos, { id: newId, text: todoTitle }],
    });
  }

  function handleDoneClick(id) {
    console.log('id',id);
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    })
  }

  return (
    <div>
      <h1>To-do</h1>

      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleChangeTitle}
      />
      <button onClick={handleAddClick}>
        추가
      </button>

      <ol>{todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button 
            type="button"
            onClick={() => handleDoneClick(todo.id)}
          >
            완료
          </button>
        </li>
      ))}</ol>
  </div>
  );
}
