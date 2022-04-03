export default function Todo({ task: { id, title }, onClick }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClick(id)}>
        완료
      </button>
    </li>
  );
}
