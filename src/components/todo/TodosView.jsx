export default function TodosView({ todos, onClick }) {
  if (todos.length === 0) {
    return <div>할 일이 없어요!</div>;
  }
  return (
    <ol>
      { todos.map(({ text, id }) => (
        <li key={id}>
          <span>{text}</span>
          <button
            onClick={() => {
              onClick(id);
            }}
            type="button"
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
