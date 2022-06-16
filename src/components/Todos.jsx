export default function Todos({ todoList, onClick }) {
  return (
    todoList.map(({ text, index }, mapIdx) => (
      <div key={index}>
        <span>{text}</span>
        <button
          onClick={() => {
            onClick(mapIdx);
          }}
          type="button"
        >
          완료
        </button>
      </div>
    ))
  );
}
