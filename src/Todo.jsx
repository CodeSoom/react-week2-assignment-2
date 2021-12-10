import Button from './Button';

export default function Todo({ todo, index, onClick }) {
  return (
    <div>
      <span>
        {index + 1}
        .
        {todo}
      </span>
      <Button onClick={() => onClick(index)}>
        완료
      </Button>
    </div>
  );
}
