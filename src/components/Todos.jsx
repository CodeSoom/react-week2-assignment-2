import Todo from './Todo';
import EmptyMessage from './EmptyMessage';

export default function Todos({ todos = [], onComplete }) {
  if (!todos.length) {
    return <EmptyMessage message="할 일이 없어요!" />;
  }

  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
          />
        ))
      }
    </ul>
  );
}
