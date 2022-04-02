export default function Button({ children, ...rest }) {
  function todoListAdd() {
    rest.setTodo('');
    rest.setTodoList([...rest.todoList, rest.todo]);
  }

  function todoListFinish() {
    const updateTodoList = [...rest.todoList].filter(
      (element, index) => index !== rest.index,
    );
    rest.setTodoList(updateTodoList);
  }

  function handleClick() {
    if (rest.todo) { todoListAdd(); }
    if (rest.type === 'finish') { todoListFinish(); }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      { children }
    </button>
  );
}
