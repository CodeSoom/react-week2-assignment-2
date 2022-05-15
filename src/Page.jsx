import InputTodo from './InputTodo';
import TodoList from './TodoList';

export default function Page({
  onSubmit, onChange, todo,
  onClick, todos,
}) {
  return (
    <>
      <h3>To-do</h3>
      <InputTodo
        onSubmit={onSubmit}
        onChange={onChange}
        todo={todo}
      />
      <TodoList
        todos={todos}
        onClick={onClick}
      />
    </>
  );
}
