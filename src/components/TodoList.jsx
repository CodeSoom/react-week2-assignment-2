import Todo from './Todo';

export default function TodoList({ todos, onClickDelete }) {
  if (todos.length === 0) {
    return (
      <p>
        할 일이 없어요!
      </p>
    );
  }

  return (
    <ol>
      {todos.map((todo) => (
        <Todo todo={todo} onClickDelete={() => onClickDelete(todo.id)} />
      ))}
    </ol>
  );
}
