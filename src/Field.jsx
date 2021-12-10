import Button from './Button';

export default function Field({ todo, onChange, onClick }) {
  function handleClick() {
    onClick(todo);
    onChange('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={todo}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button onClick={handleClick}>
        추가
      </Button>
    </div>
  );
}
