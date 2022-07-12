import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import uuid from 'react-uuid';

import Input from './Input';
import Todo from './Todo';

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handleAddTodo = (item) => {
    const result = [...todoItem];
    result.push(item);
    setTodoItem(result);
  };

  return (
    <div>
      <p>To-do</p>
      <Input handleClick={handleAddTodo} />
      <ul>
        {todoItem.map((item) => (
          <Todo lable={item} key={uuid()} id={uuid()} />
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
