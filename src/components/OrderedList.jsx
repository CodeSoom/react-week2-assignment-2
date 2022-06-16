export default function OrderedList({ onClick }) {
  return (
    <ol>
      {[1, 2, 3, 4, 5].map((i) => (
        <li key={i}>
          <span>항목</span>
          <input
            className={i}
            key={i}
            onClick={onClick}
            type="button"
            value="완료"
          />
        </li>
      ))}
    </ol>
  );
}
