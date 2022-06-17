export default function TodosView({ todos, onClick }) {
  if (todos.length === 0) {
    return <div>할 일이 없어요!</div>;
  }
  return (
    todos.map(({ text, id }) => (
      <div key={id}>
        <span>{text}</span>
        <button
          onClick={() => {
            onClick(id);
          }}
          type="button"
        >
          완료
        </button>
      </div>
    ))
  );
}
