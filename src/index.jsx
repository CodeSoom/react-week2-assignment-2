import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const addTodoList = () => {
    setTodos([...todos, {
      id: new Date(),
      content: value,
    }]);
  };

  return (
    <div>
      <h2>Todo</h2>
      <input type="text" onChange={onChangeValue} value={value} />
      <button type="button" onClick={addTodoList}>추가</button>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
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
