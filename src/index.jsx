import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
      <div>
        {todoItem.map((item) => (
          <Todo lable={item} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
