import ToDoInputField from './ToDoInputField';
import ToDoList from './ToDoList';

export default function ToDo({ toDos, removeHandler, appendHandler }) {
  return (
    <>
      <h1>To-do</h1>
      <ToDoInputField appendHandler={appendHandler} />
      <ToDoList toDos={toDos} removeHandler={removeHandler} />
    </>
  );
}
