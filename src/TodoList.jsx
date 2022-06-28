import TodoItem from './TodoItem';

export default function TodoList({ todos, onRemoveTodoItem }) {
  if (todos.length === 0) {
    return (
      <p>할일이 없어요!</p>
    );
  }
  return (
    <div>
      {todos.length > 0
          && todos.map(
            (item, index) => (
              <TodoItem
                key={item.id}
                item={item}
                index={index}
                onRemoveTodoItem={onRemoveTodoItem}
              />
            ),
          )}
    </div>
  );
}
