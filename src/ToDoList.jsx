export default function ToDoList({
  list,
  onClickRemove,
}) {
  return (
    <ol>
      {list.map((content) => (
        <li key={content.id}>
          {content.value}
          <button
            type="button"
            onClick={() => onClickRemove(content.id)}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
