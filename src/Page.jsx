import Title from './components/Title';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

export default function Page({
  handleClickAddButton, todoTitle, setTodoTitle,
  handleClickCompleteButton, todos,
}) {
  return (
    <>
      <Title title="To-do" />
      <InputTodo
        onClick={handleClickAddButton}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
      />
      <TodoList
        onClick={handleClickCompleteButton}
        todos={todos}
      />
    </>
  );
}
