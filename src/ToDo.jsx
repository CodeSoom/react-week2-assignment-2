import ToDoInputField from './ToDoInputField';
import ToDoList from './ToDoList';

export default function ToDo({
  toDos,
  removeToDoHandler,
  appendToDoHandler,
  resetInputValue,
  changeInputHandler,
  newToDoValue,
}) {
  return (
    <>
      <h1>To-do</h1>
      <ToDoInputField
        appendToDoHandler={appendToDoHandler}
        resetInputValue={resetInputValue}
        changeInputHandler={changeInputHandler}
        newToDoValue={newToDoValue}
      />
      <ToDoList toDos={toDos} removeToDoHandler={removeToDoHandler} />
    </>
  );
}
