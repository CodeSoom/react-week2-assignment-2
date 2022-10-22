import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todoItem, setTodoItem] = useState({
    id: null,
    content: '',
  });
  const [todoList, setTodoList] = useState([]);

  // const { id, content, todoText } = todo;

  function handleChange(e) {
    setTodoItem({
      id: Date.now(),
      content: e.target.value,
    });
  }

  function handleClickAdd(e) {
    e.preventDefault();
    if (todoItem.content === '') {
      alert('할 일을 입력하세요');
      return;
    }
    setTodoList([
      ...todoList, {
        id: todoItem.id,
        content: todoItem.content,
      },
    ]);
    setTodoItem({
      id: null,
      content: '',
    });
  }

  function handleClickDelete(id) {
    setTodoList(
      [...todoList].filter((item) => item.id !== id),
    );
  }

  return (
    <div>
      <Page
        onClick={handleClickAdd}
        onChange={handleChange}
        onDelete={handleClickDelete}
        todoList={todoList}
        todoItem={todoItem}
      />
    </div>
  );
}
