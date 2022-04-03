import Button from './Button';

export default function Todo({ todo, onClickDelete }) {
  const { id, value } = todo;

  return (
    <li key={id}>
      {value}
      <Button onClick={onClickDelete}>
        완료
      </Button>
    </li>
  );
}
