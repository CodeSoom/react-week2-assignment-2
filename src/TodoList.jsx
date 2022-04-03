import Button from './Button';

export default function TodoList({ todoList, onClick }) {
  function todoListItem() {
    return (
      todoList.map((value) => (
        <li key={value}>
          {value}
          <Button
            onClick={() => onClick(value)}
          >
            완료
          </Button>
        </li>
      ))
    );
  }

  if (todoList.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }
  if (todoList.length > 0) {
    return (
      <ol className="todo-list">
        {todoListItem()}
      </ol>
    );
  }
}
