export default function Todos({ todos, onClick }) {
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
