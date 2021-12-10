import ToDoInputField from './ToDoInputField';
import ToDoList from './ToDoList';

export default function ToDo({ toDos, removeToDoHandler, appendToDoHandler }) {
  return (
    <>
      <h1>To-do</h1>
      <ToDoInputField appendToDoHandler={appendToDoHandler} />
      <ToDoList toDos={toDos} removeToDoHandler={removeToDoHandler} />
    </>
  );
}
