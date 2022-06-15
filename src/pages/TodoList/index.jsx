import TodoSubmit from '../../components/TodoSubmit';
import List from '../../components/List';

export default function TodoList({
  todos,
  todo,
  todoHandler,
  createTodo,
  completionTodo,
}) {
  return (
    <>
      <h1>Todo</h1>
      <TodoSubmit
        todo={todo}
        todoHandler={todoHandler}
        createTodo={createTodo}
      />
      <List
        completionTodo={completionTodo}
        todos={todos}
      />
    </>
  );
}
