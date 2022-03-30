export default function Input({ onChange }) {
  return (
    <>
      <input type="text" name="todo" onChange={(e) => onChange(e)} placeholder="할 일을 입력해 주세요" />
    </>
  );
}
