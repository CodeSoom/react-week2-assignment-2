import AddToDo from './AddTodo';
import List from './List';

export default function Page({
  list,
  handleAddList,
  handleDeleteList,
}) {
  return (
    <div>
      <p>To-do</p>
      <AddToDo list={list} handleAddList={handleAddList} />
      <List
        list={list}
        handleDeleteList={handleDeleteList}
      />
    </div>
  );
}
