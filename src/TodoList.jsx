import TodoItem from './TodoItem';

export default function TodoList({ todoList, onDelete }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} onDelete={onDelete} />
        ))}
      </ol>
    </div>
  );
}
