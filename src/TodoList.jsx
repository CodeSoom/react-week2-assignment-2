export default function TodoList({ todos, handleCompleteClick }) {
  if (todos.length < 1) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    todos.map((todo, index) => (
      <div key={todo}>
        {`${index + 1}. ${todo}`}
        <button type="button" onClick={() => handleCompleteClick(index)}>완료</button>
      </div>
    ))
  );
}
