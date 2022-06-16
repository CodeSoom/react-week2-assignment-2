import TodoSubmit from '../../components/TodoSubmit';
import TodoList from '../../components/TodoList';

export default function Todo({
  todos,
  todo,
  todoHandler,
  createTodo,
  compelteTodo,
}) {
  return (
    <>
      <h1>Todo</h1>
      <TodoSubmit
        todo={todo}
        todoHandler={todoHandler}
        createTodo={createTodo}
      />
      <TodoList
        compelteTodo={compelteTodo}
        todos={todos}
      />
    </>
  );
}
