export default function Form({ inputText, onChangeInput, onClickAddButton }) {
  return (
    <form onSubmit={onClickAddButton}>
      <input type="text" value={inputText} placeholder="할 일을 입력해 주세요" onChange={onChangeInput} />
      <button type="submit">추가</button>
    </form>
  );
}
