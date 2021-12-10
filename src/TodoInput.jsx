export default function TodoInput({ todo, onChange, handleSubmit }) {
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="할 일을 입력해주세요"
            onChange={onChange}
            value={todo}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    </>
  );
}
