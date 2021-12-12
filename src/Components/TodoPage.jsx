import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoPage = ({
  todoTitle, todos, onClickAddTodo,
  onClickRemoveTodo, onChangeTodo,
}) => (
  <>
    <h1>To-do</h1>
    <TodoInput
      todoTitle={todoTitle}
      onClickAdd={onClickAddTodo}
      onChange={onChangeTodo}
    />
    <TodoList todos={todos} onClickRemove={onClickRemoveTodo} />
  </>
);

export default TodoPage;
