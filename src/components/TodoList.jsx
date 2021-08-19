import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  const handleClickCompleteButton = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (!todos.length) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {todos.map(({ id, content }) => (
        <TodoItem
          key={id}
          id={id}
          content={content}
          handleClickCompleteButton={handleClickCompleteButton}
        />
      ))}
    </ol>
  );
}
