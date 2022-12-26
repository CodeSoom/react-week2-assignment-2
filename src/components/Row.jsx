export default function Row({ index, todo, onClick }) {
  return (
    <div>
      {`${index + 1}. ${todo}`}
      <button type="button" onClick={() => onClick(index)}>완료</button>
    </div>
  );
}
