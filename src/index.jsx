import React, { useState } from 'react';
import ReactDom from 'react-dom';

import TodoListForm from './TodoListForm';
import TodoList from './TodoList';

function App() {
  const [todoListLength, setTodoListLength] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodoList = () => {
    if (input.trim() === '') {
      setInput('');
      return;
    }
    setTodoList([...todoList, {
      id: todoListLength,
      text: input,
    }]);
    setTodoListLength(todoListLength + 1);
    setInput('');
  };

  const handleRemoveTodoList = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    setTodoListLength(todoListLength - 1);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>
        To-Do (
        {todoListLength}
        )
      </h1>

      <TodoListForm
        input={input}
        onChange={handleInput}
        onClick={handleAddTodoList}
      />
      <TodoList list={todoList} handleRemove={handleRemoveTodoList} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
