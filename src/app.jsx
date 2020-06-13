import React, {useState} from 'react';
import Page from './page.jsx';

function App() {

  const [state, setState] = useState({
    todoList: '',
    newTodo: '',
  });
      
  const { todoList, newTodo } = state;  

  const addFormState = {
    newTodo,
    handleChange,
    handleSubmit,
  };

  const todoState = {
    todoList,
  };

  function handleChange(event) {
    setState({
        newTodo: event.target.value,
    });
 
  }

  function handleSubmit() {
    setState({
      todoList: newTodo,
      newTodo: '',
    });
  }

  return (
    <Page 
        addFormState={addFormState}
        todoState={todoState} 
    />
  );
}

export default App;
