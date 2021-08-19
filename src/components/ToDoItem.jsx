import Button from './Button';

export default function ToDoItem({ item, onClickCompleteToDo }) {
  const { id, toDo } = item;
  return (
    <div>
      <span>{toDo}</span>
      <Button onClick={() => onClickCompleteToDo(id)}>
        완료
      </Button>
    </div>
  );
}
