import CompleteButton from './CompleteButton';

export default function Todo({ todo, onClickDelete }) {
  const { id, value } = todo;

  return (
    <li key={id}>
      {value}
      <CompleteButton onClick={onClickDelete} />
    </li>
  );
}
