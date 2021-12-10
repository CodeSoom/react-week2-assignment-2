import Todo from './ToDo';

export default function Todos({ todos, onClick }) {
  if (!todos.length) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={todo} index={index + 1} todo={todo} onClick={onClick} />
      ))}
    </div>
  );
}
