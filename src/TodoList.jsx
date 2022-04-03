import Todo from './Todo';

export default function TodoList({ tasks, onClick }) {
  if (!tasks.length) {
    return (
      <div>
        <p>할 일이 없어요!</p>
      </div>
    );
  }

  return (
    <ol>
      {tasks.map((task) => (
        <Todo key={task.id} task={task} onClick={onClick} />
      ))}
    </ol>
  );
}
