export default function Form({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <input type="text" />
        <input type="submit" value="입력" />
      </form>
    </div>
  );
}
