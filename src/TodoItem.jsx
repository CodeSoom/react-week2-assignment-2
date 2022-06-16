export default function TodoItem({ item }) {
  return (
    <li>
      <strong>{ item.title }</strong>
      <button type="button">완료</button>
    </li>
  );
}
