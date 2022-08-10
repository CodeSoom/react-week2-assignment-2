export default function Form({ inputText, onInputChange, onAddButtonClick }) {
    return (
      <form onSubmit={onAddButtonClick}>
        <input type="text" value={inputText} placeholder="할 일을 입력해 주세요" onChange={onInputChange} />
        <button type="submit">추가</button>
      </form>
    );
  }
  