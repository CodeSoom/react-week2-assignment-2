import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputHandler from './InputHandler';

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
  }

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <InputHandler todo={todo} onCreate={onCreate} onChange={onChange} />
        <TodoList todoList={todoList} onClickRemove={onClickRemove} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
