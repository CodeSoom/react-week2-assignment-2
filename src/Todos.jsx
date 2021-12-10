import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return (
      <div>
        할 일이 없어요!
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={todo}
          index={index}
          todo={todo}
          onClick={onClick}
        >
          {todo}
        </Todo>
      ))}
    </div>

  );
}
