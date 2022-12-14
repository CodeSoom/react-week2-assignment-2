import { useState } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [state, setState] = useState({
    todoList: [],
    todoInput: '',
  });

  const { todoList, todoInput } = state;

  function handleClickAdd(eventObject) {
    const temp = eventObject;
    temp.target.previousSibling.value = '';
    setState({
      ...state,
      todoList: [...todoList, todoInput],
    });
  }

  function handleClickDone(index) {
    setState({
      ...state,
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
    });
  }

  function handleChnageInput(eventObject) {
    setState({
      ...state,
      todoInput: eventObject.target.value,
    });
  }

  return (
    <div>
      <p>To-do</p>
      <Input onClick={handleClickAdd} onChange={handleChnageInput} />
      <List todoList={todoList} onClick={handleClickDone} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
