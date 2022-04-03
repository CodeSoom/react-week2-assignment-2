export default function TodoInput({ onChange, value }) {
  return (
    <input
      type="text"
      placeholder="할 일을 입력해주세요."
      name="todo"
      onChange={onChange}
      value={value}
    />
  );
}
