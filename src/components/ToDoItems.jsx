import ToDoItem from './ToDoItem';

export default function ToDoItems({ items, onClickCompleteToDo }) {
  return (
    <div>
      {
        items.length > 0 && items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onClickCompleteToDo={onClickCompleteToDo}
          />
        ))
      }
      {items.length === 0 && <div>할 일이 없어요!</div>}
    </div>
  );
}
