import Button from './Button';

export default function Todo({ todo, onClick }) {
  return (
    <li>
      <span>
        {todo.text}
      </span>
      <Button onClick={() => onClick(todo)}>
        완료
      </Button>
    </li>
  );
}
