import List from '../../components/List';
import TodoSubmit from '../../components/TodoSubmit';

export default function TodoList() {
  return (
    <div>
      <h1>Todo</h1>
      <TodoSubmit />
      <List />
    </div>
  );
}
