import Button from './Button';

export default function Field({ newTodo, onChange, onClick }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={newTodo}
        onChange={onChange}
      />
      <Button onClick={onClick}>
        추가
      </Button>
    </div>
  );
}
