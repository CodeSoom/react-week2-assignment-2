export default function TodoItem({ key, todo, onClick }) {
  return (
    <li>
      {todo.contents}
      <button type="button" key={key} onClick={() => onClick(todo.id)}>
        완료
      </button>
    </li>
  );
}
