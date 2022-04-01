import Button from './Button';

export default function Todo({ todo, onClickDelete }) {
  const { id, value } = todo;

  return (
    <li key={id}>
      {value}
      <Button onClick={onClickDelete} title="완료" />
    </li>
  );
}
