import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todoItem: '',
    todoArray: [],
  })

  const { todoItem, todoArray } = state;

  function handleChange(e) {
    setState({
      todoItem: e.target.value,
      todoArray,
    });
  }

  function handleAddTodo() {
    setState({
      todoArray: [...todoArray, todoItem],
      todoItem: '',
    });
  }

  function handleFinishTodo(item) {
    setState({
      todoArray: todoArray.filter((testItem) => item !== testItem)
    });
  }

  return (
    <Page
      todoItem={state.todoItem}
      todoArray={state.todoArray}
      handleChange={handleChange}
      handleAddTodo={handleAddTodo}
      handleFinishTodo={handleFinishTodo}
    />
  );
}
