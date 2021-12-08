export default function ToDoList({ list, removeHandler }) {
  if (list.length === 0) return <p>할 일이 없어요!</p>;
  return (
    <ol>
      {list.map(({ id, text }) => (
        <li key={id}>
          {text}
          <button
            onClick={() => removeHandler(id)}
            type="button"
            style={{ margin: '0 0 0 5px' }}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
