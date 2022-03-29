import CompleteButton from './CompleteButton';

export default function Todo({ todo, handleDelete }) {
  const { id, value } = todo;

  return (
    <>
      <li key={id}>
        {value}
        <CompleteButton handleDelete={handleDelete} />
      </li>
    </>
  );
}
