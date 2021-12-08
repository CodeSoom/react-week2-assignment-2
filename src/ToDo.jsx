import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default function ToDo({ list, removeHandler, appendHandler }) {
  return (
    <>
      <h1>To-do</h1>
      <ToDoInput appendHandler={appendHandler} />
      <ToDoList list={list} removeHandler={removeHandler} />
    </>
  );
}
