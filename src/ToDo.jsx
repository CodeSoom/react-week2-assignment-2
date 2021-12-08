import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

const ToDo = ({ list, removeHandler, appendHandler }) => (
  <>
    <h1>To-do</h1>
    <ToDoInput appendHandler={appendHandler} />
    <ToDoList list={list} removeHandler={removeHandler} />
  </>
);

export default ToDo;
