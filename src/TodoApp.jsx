import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todos, setTodos] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  const { newId, taskTitle, tasks } = todos;

  function handleAddTodo() {
    setTodos({
      ...todos,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  function handleRemoveTodo(id) {
    setTodos({
      ...todos,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  function handleChangeTitle(event) {
    setTodos({
      ...todos,
      taskTitle: event.target.value,
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        onChange={handleChangeTitle}
        value={taskTitle}
      />
      <TodoButton
        onClick={handleAddTodo}
      />
      <TodoList
        tasks={tasks}
        onClick={handleRemoveTodo}
      />
    </div>

  );
}
