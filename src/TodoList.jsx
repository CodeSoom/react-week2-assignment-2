import TodoItem from './TodoItem';

const TodoList = ({ todos, onComplete }) => (
  <ol>
    {todos.map(
      (todo) => (
        <TodoItem
          todo={todo}
          onComplete={onComplete}
        />
      ),
    )}
  </ol>
);

export default TodoList;
