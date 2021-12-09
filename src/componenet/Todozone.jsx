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
      {todos.map((i) => (
        <li key={i}>
          {i}
          <Button onClick={() => onClick(i)}>
            del
          </Button>
        </li>
      ))}
    </ul>
  );
}
