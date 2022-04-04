import Todo from './Todo';

export default function TodoList({ todos, handleComplete }) {
  if (!todos.length) return <span>할 일이 없어요!</span>;

  return (
    <ol>
      {todos.map(({ content, id }) => (
        <Todo content={content} handleComplete={() => handleComplete(id)} />
      ))}
    </ol>
  );
}
