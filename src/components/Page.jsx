import TodoAppender from './TodoAppender';
import Todos from './Todos';

export default function Page({
  todoTitle, onChangeTitle, onSubmitAddTodo,
  todos, onClickDeleteTodo,
}) {
  return (
    <>
      <h1>To-do</h1>
      <TodoAppender
        todoTitle={todoTitle}
        onChangeTitle={onChangeTitle}
        onSubmit={onSubmitAddTodo}
      />
      <Todos
        todos={todos}
        onClickDeleteTodo={onClickDeleteTodo}
      />
    </>
  );
}
