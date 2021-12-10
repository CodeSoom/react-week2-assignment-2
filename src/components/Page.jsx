import AddToDo from './AddTodo';
import List from './List';

export default function Page({
  text,
  list,
  setText,
  handleAddList,
  handleDeleteList,
}) {
  return (
    <div>
      <p>To-do</p>
      <AddToDo
        text={text}
        setText={setText}
        list={list}
        handleAddList={handleAddList}
      />
      <List
        list={list}
        handleDeleteList={handleDeleteList}
      />
    </div>
  );
}
