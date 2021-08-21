export default function TodoItem({
  id,
  content,
  handleClickCompleteButton,
}) {
  const handleClick = () => {
    handleClickCompleteButton(id);
  };

  return (
    <li>
      {content}
      <button
        type="button"
        onClick={handleClick}
      >
        완료
      </button>
    </li>
  );
}
