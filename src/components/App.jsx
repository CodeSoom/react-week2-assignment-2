import { useState, useRef } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');

  const listId = useRef(0);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRemove = ({ finishedItem }) => {
    setTodoList(todoList.filter((item) => item.id !== finishedItem.id));
  };

  const onCreate = ({ listText }) => {
    const listItem = {
      id: listId.current,
      text: listText,
    };
    listId.current += 1;

    setTodoList([...todoList, listItem]);
    setInputText('');
  };

  return (
    <>
      <h1>To-do</h1>
      <ToDoInput
        inputText={inputText}
        onChange={handleChange}
        onClick={onCreate}
      />
      <ToDoList todoList={todoList} onClick={handleRemove} />
    </>
  );
};

export default App;
