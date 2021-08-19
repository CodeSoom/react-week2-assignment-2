import InputField from './InputField';
import ToDoItems from './ToDoItems';

export default function Page({
  toDo, onInputChange, onClickAddToDo, toDoItems, onClickCompleteToDo,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <InputField
        toDo={toDo}
        onInputChange={onInputChange}
        onClickAddToDo={onClickAddToDo}
      />
      <ToDoItems
        items={toDoItems}
        onClickCompleteToDo={onClickCompleteToDo}
      />
    </div>
  );
}
