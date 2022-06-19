import TodoSubmit from '../../components/TodoSubmit';
import TodoList from '../../components/TodoList';

export default function Todo({
  todos,
  inputTodo,
  handleChangeTodo,
  createTodo,
  completeTodo,
  disabled,
  isEmpty,
}) {
  return (
    <>
      <h1>Todo</h1>
      <TodoSubmit
        inputTodo={inputTodo}
        handleChangeTodo={handleChangeTodo}
        createTodo={createTodo}
        disabled={disabled}
      />
      <TodoList
        completeTodo={completeTodo}
        todos={todos}
        isEmpty={isEmpty}
      />
    </>
  );
}
