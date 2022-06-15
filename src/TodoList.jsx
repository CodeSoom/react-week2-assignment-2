import TodoItem from './TodoItem';

const TodoList = () => (
  <ol>
    {['할 일', '아무 것도 하지 않기', '코드숨 과제'].map(
      (todo) => <TodoItem todo={todo} />,
    )}
  </ol>
);

export default TodoList;
