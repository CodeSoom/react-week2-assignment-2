import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h2>Todo</h2>
      <input type="text" />
      <button type="button">추가</button>
      <ol>
        {todos.map((todo) => (
          <li>
            <p>{todo?.content}</p>
            <button type="button">완료</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
