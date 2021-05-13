import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const addTodoList = () => {
    if (!value.trim()) return;

    setTodos([...todos, {
      id: new Date(),
      content: value,
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
    />
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
