import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';

export default function Page({
  onSubmit, todoList, todoItem, onChange, onDelete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoForm
        onSubmit={onSubmit}
        onChange={onChange}
        todoItem={todoItem}

      />
      <TodoList
        todoItem={todoItem}
        todoList={todoList}
        onDelete={onDelete}
      />
    </div>
  );
}
