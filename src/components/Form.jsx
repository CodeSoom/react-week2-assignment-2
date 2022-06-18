export default function Form({ onSubmit, onChange, formInputValue }) {
  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <input type="text" onChange={onChange} value={formInputValue} />
        <input type="submit" value="입력" />
      </form>
    </div>
  );
}
