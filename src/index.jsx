import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
// import './style.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const checkTodo = (id) => {
    todos.find((todo) => todo.id === id).done = !todos.find((todo) => todo.id === id).done;
    setTodos([...todos]);
  };

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const addTodoList = (e) => {
    if (!value.trim()) return;
    if (e.key && e.key !== 'Enter') return;

    setTodos([...todos, {
      id: new Date(),
      content: value,
      done: false,
    }]);

    setValue('');
    inputRef.current.focus();
  };

  const deleteTodoList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    inputRef.current.focus();
  };

  return (
    <Page
      todos={todos}
      value={value}
      onChangeValue={onChangeValue}
      addTodoList={addTodoList}
      deleteTodoList={deleteTodoList}
      inputRef={inputRef}
      checkTodo={checkTodo}
    />
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
