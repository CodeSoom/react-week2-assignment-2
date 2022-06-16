import TodoItem from './TodoItem';

export default function TodoItems({ todoItems = [] }) {
  return (
    <ul>
      {
        todoItems.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))
      }
    </ul>
  );
}
