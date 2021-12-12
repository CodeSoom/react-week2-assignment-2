export default function Todo({ index, todo, onClick }) {
  return (
    <li>
      {index}. {todo}
      <button type="button" onClick={() => onClick(todo)}>
        완료
      </button>
    </li>
  );
}
