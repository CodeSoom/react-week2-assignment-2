import TodoInputField from './TodoInputField';
import TodoList from './TodoList';

export default function Page({
  handleChangeInput,
  handleClickAddButton,
  handleClickCompleteButton,
  todos,
  todoContent,
}) {
  return (
    <>
      <h1>To-do</h1>
      <TodoInputField
        todoContent={todoContent}
        handleChangeInput={handleChangeInput}
        handleClickAddButton={handleClickAddButton}
      />
      <TodoList
        todos={todos}
        handleClickCompleteButton={handleClickCompleteButton}
      />
    </>
  );
}
