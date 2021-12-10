import Button from './Button';

export default function Todo({ todo, index, onClick }) {
  return (
    <div>
      <span>
        {index + 1}
        .
        {todo.text}
      </span>
      <Button onClick={() => onClick(todo.id)}>
        완료
      </Button>
    </div>
  );
}
