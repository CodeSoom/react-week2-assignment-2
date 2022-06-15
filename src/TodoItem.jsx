export default function TodoItem({ item }) {
  return (
    <li className="todo-item">
      <strong className="todo-item__title">{ item.title }</strong>
      <button type="button" className="todo-item__complete">완료</button>
    </li>
  );
}
