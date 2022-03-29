export default function CompleteButton({ handleDelete }) {
  return (
    <button
      type="button"
      onClick={handleDelete}
    >
      완료
    </button>
  );
}
