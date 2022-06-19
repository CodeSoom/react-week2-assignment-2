export default function ListOfTodos({ todoList, handleButttonClick }) {
  return (
    <ol>
      {todoList.map((item) => (
        <li key={item.key}>
          {item.text}
          <button
            key={item.key}
            onClick={() => handleButttonClick(item.key)}
            type="button"
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
