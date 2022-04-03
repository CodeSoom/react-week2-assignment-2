import Button from './Button';

export default function Input({ todo, onClick, onChange }) {
  return (
    <>
      <input
        type="text"
        name="todo"
        onChange={(e) => onChange(e)}
        value={todo}
        placeholder="할 일을 입력해 주세요"
      />
      <Button
        onClick={onClick}
      >
        추가
      </Button>
    </>
  );
}
