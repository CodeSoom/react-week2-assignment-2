import Button from './Button';

export default function ToDoItem({ item, onClickCompleteToDo }) {
  const { id, value } = item;
  return (
    <div>
      <span>{value}</span>
      <Button onClick={() => onClickCompleteToDo(id)}>
        완료
      </Button>
    </div>
  );
}
