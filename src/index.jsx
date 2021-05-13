import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

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

  const deleteTodoList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Page
      todos={todos}
      value={value}
      onChangeValue={onChangeValue}
      addTodoList={addTodoList}
      deleteTodoList={deleteTodoList}
    />
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
