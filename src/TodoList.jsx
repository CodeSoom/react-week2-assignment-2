import TodoItem from './TodoItem';

export default function TodoList({ list }) {
  return (
    <ul className="todo-list">
      {
        list.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))
      }
    </ul>
  );
}
