import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState('');

  const [id, setId] = useState(1);

  function onChange(e) {
    setTodo(e.target.value);
  }

  function onCreate() {
    if (todo === '') {
      return;
    }

    setTodoList([...todoList, { id, todo }]);
    setId(id + 1);
    setTodo('');
  }

  function onClickRemove(key) {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== key));
    setId(id - 1);
  }

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <input placeholder="할 일을 입력해 주세요" value={todo || ''} onChange={onChange} />
        <button type="button" onClick={onCreate}>
          추가
        </button>
        <TodoList todoList={todoList} onClickRemove={onClickRemove} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
