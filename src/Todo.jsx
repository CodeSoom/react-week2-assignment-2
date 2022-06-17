export default function Todo({ todo }) {
  return (
    <li>
      <strong>{ todo.title }</strong>
      <button type="button">완료</button>
    </li>
  );
}
