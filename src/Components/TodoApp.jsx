import TodoInput from './TodoInput';

const TodoApp = () => {
  const handleClickAddTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoInput onClick={handleClickAddTodo} />
    </>
  );
};

export default TodoApp;
