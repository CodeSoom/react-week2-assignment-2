import React, { useState } from 'react';
import ReactDom from 'react-dom';

import TodoListForm from './TodoListForm';
import TodoList from './TodoList';

function App() {
  const [todoListLength, setTodoListLength] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodoList = () => {
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

  return (
    <div>
      <h1>
        To-Do (
        {todoListLength}
        )
      </h1>

      <TodoListForm
        input={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={handleAddTodoList}
      />
      <TodoList list={todoList} handleRemove={handleRemoveTodoList} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
