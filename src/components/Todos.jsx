export default function Todos({ todoList, handleClickCompleteButton }) {
  return (
    todoList.map(({ text, index }, mapIdx) => (
      <div key={index}>
        <span>{text}</span>
        <button
          onClick={() => {
            handleClickCompleteButton(mapIdx);
          }}
          type="button"
        >
          완료
        </button>
      </div>
    ))
  );
}
