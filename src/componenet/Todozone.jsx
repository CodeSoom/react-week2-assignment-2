import Button from './Button';

export default function Todozone({ todos, onClick }) {
  if (todos.length === 0) {
    return (
      <div>
        할 일이 없어요!
      </div>
    );
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>
          {todo}
          <Button onClick={() => onClick(todo)}>
            완료
          </Button>
        </li>
      ))}
    </ul>
  );
}
