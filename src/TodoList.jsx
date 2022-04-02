import Button from './Button';

export default function TodoList({ ...rest }) {
  function todoListItem() {
    return (
      rest.todoList.map((value, index) => (
        <li key={value}>
          {value}
          <Button
            type="finish"
            index={index}
            todo={rest.todo}
            setTodo={rest.setTodo}
            todoList={rest.todoList}
            setTodoList={rest.setTodoList}
          >
            완료
          </Button>
        </li>
      ))
    );
  }

  if (rest.todoList.length > 0) {
    return (
      <ol className="todo-list">
        {todoListItem()}
      </ol>
    );
  }
  return (
    <p>할 일이 없어요!</p>
  );
}
