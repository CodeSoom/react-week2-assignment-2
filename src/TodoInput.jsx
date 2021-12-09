export default function TodoInput({ handleSubmit }) {
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="할 일을 입력해주세요"
          />
          <button type="submit">추가</button>
        </form>
      </div>
    </>
  );
}
