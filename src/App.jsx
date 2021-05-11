import React, { useState } from 'react';

function App() {
  const [description, setDescription] = useState('');
  const [currentId, setCurrentId] = useState(1);
  const [todoList, setTodoList] = useState([]);

  const onAdd = () => {
    const todo = { id: currentId, description };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
  }

  const onDelete = (e) => {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <p>To-do</p>
      <p>
        <input
          type='text'
          placeholder='할 일을 입력해 주세요'
          value={description}
          onChange={(e) => setDescription(e.target.value)} >
        </input>
        <button
          type='button'
          onClick={onAdd}>
          추가
        </button>
      </p>
      <p>
        <ul>
          {
            todoList.map((todo) => (
              <li key={todo.id} type='1'>
                <span>{todo.description}</span>
                <button data-id={todo.id} onClick={onDelete}>완료</button>
              </li>
            ))
          }
        </ul>
      </p>
    </div>
  );
}

export default App;
