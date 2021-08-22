import ToDoItem from './ToDoItem';

export default function ToDoItems({ items, onClickCompleteToDo }) {
  if (items.length === 0) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <ol>
      {
        items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onClickCompleteToDo={onClickCompleteToDo}
          />
        ))
      }
    </ol>
  );
}
