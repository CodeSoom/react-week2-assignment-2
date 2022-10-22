import TodoEditor from './Todo/TodoEditor';
import TodoList from './Todo/TodoList';

export default function Page({
  onClick, todoList, todoItem, onChange, onDelete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoEditor
        onClick={onClick}
        // value={todoList}
        onChange={onChange}
        // value={todo}
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
