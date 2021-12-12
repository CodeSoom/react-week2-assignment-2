import Title from './Title';
import TodoInput from './TodoInput';
import Todos from './Todos';

function Page({
  todos, todo, onChangeTodo, onClickAdd, onClickRemove,
}) {
  return (
    <div>
      <Title title="TODO-List" />
      <TodoInput todo={todo} onChangeTodo={onChangeTodo} onClickAdd={onClickAdd} />
      <br />
      <Todos todos={todos} onClickRemove={onClickRemove} />
    </div>
  );
}

export default Page;
