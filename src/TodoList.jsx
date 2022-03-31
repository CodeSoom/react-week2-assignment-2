import TodoItem from './TodoItem';

export default function TodoList({ todoList, onDelete }) {
  return (
    <div>
      {todoList.length > 0 ? (
        <ol>
          {todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              onDelete={onDelete}
            />
          ))}
        </ol>
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </div>
  );
}
