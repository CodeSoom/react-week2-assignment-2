import Button from '../common/Button';

export default function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return <div>할 일이 없어요!</div>;
  }
  return (
    <ol>
      { todos.map(({ text, id }) => (
        <li key={id}>
          <span>{text}</span>
          <Button
            onClick={() => {
              onClick(id);
            }}
          >
            완료
          </Button>
        </li>
      ))}
    </ol>
  );
}
