import Button from './Button';

export default function InputField({ toDo, onInputChange, onClickAddToDo }) {
  return (
    <>
      <input value={toDo} onChange={onInputChange} />
      <Button onClick={onClickAddToDo}>추가</Button>
    </>
  );
}
