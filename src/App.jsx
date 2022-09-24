import { useState } from 'react';
import TodoList from './TodoList';

export default function App() {
  const [value, setValue] = useState('');
  const [toDoList, setTodoList] = useState([]);
  // const [state, setState] = useState({
  //   value: '',
  //   toDoList: [],
  // });
  
  function insertTodo() {
    const tempTodoList = [...toDoList, value];
    setTodoList(tempTodoList);
    setValue('');
  }

  function deleteTodo(index) {
    const tempTodoList = toDoList.filter((todo, i) => i !== index);
    // setState({ ...state, toDoList: tempTodoList });
    setTodoList(tempTodoList);
  }

  return (
    <div>
      <h1>To-Do</h1>
      <input value={value} onChange={(e) => { setValue( e.target.value ); }} />
      <button type="button" onClick={insertTodo}>추가</button>
      <TodoList toDoList={toDoList} onClick={deleteTodo} />
    </div>
  );
}

