import AddToDo from './AddTodo';
import List from './List';

export default function Page({
  list,
  addList,
  deleteList,
}) {
  return (
    <div>
      <p>To-do</p>
      <AddToDo list={list} addList={addList} />
      <List list={list} deleteList={deleteList} />
    </div>
  );
}
