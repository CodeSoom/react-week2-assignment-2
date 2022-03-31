import { useState } from 'react/cjs/react.production.min';
import ToDoList from './ToDoList';

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState('');

  function onNewTask(event) {
    setNewTask(event.target.value);
  }

  function onAddTask() {
    setTodo([...todo, newTask]);
    setNewTask('');
  }

  function onRemoveTask(index) {
    setTodo(todo.filter((item, i) => i !== index));
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
