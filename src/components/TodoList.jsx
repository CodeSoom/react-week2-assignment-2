export default function TodoList() {
  const style = { display: 'flex', alignItems: 'center' };

  return (
    <div>
      <div style={style}>
        <p>1. 할일</p>
        <button type="button">완료</button>
      </div>
    </div>
  );
}
