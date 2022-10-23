import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todoItem, setTodoItem] = useState({
    id: null,
    content: '',
  });
  const [todoList, setTodoList] = useState([]);
  const { id, content } = todoItem;

  function handleChange(e) {
    setTodoItem({
      id: Date.now(),
      content: e.target.value,
    });
  }

  function handleSubmitTodo(e) {
    e.preventDefault();

    if (todoItem.content === '') {
      alert('할 일을 입력하세요');
      return;
    }
    setTodoList([
      ...todoList, {
        id,
        content,
      },
    ]);
    setTodoItem({
      id: null,
      content: '',
    });
  }

  function handleClickDelete(todoId) {
    setTodoList(
      [...todoList].filter((item) => item.id !== todoId),
    );
  }

  return (
    <div>
      <Page
        onSubmit={handleSubmitTodo}
        onChange={handleChange}
        onDelete={handleClickDelete}
        todoList={todoList}
        todoItem={todoItem}
      />
    </div>
  );
}
