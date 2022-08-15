import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Page({
  todoTitle, onChangeTitle, onAddClick,
  todos, onDoneClick,
}) {
  return (
    <div>
      <h1>To-do</h1>

      <AddTodo
        value={todoTitle}
        onChange={onChangeTitle}
        onClick={onAddClick}
      />

      <TodoList
        todos={todos}
        onClick={onDoneClick}
      />
    </div>
  );
}
