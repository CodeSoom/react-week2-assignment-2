import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState('');

  function newId() {
    if (todo.length === 0) return 1;

    return todo[todo.length - 1].id + 1;
  }

  function onNewTask(event) {
    setNewTask(event.target.value);
  }

  function onAddTask() {
    setTodo([...todo, { id: newId(), data: newTask }]);
    setNewTask('');
  }

  function onRemoveTask({ id }) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>To-do</h1>
      <input
        placeholder="할 일을 입력해 주세요"
        value={newTask}
        onChange={onNewTask}
      />
      <button
        type="button"
        onClick={onAddTask}
      >
        추가
      </button>
      <p>
        <ToDoList
          todo={todo}
          onRemoveTask={onRemoveTask}
        />
      </p>
    </>
  );
}

export default App;
