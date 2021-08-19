export default function TodoItem({ id, content, handleClickCompleteButton }) {
  return (
    <li key={id}>
      {content}
      <button
        type="button"
        onClick={() => handleClickCompleteButton(id)}
      >
        완료
      </button>
    </li>
  );
}
