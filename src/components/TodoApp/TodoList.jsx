import { useMemo } from 'react';

import TodoItem from './TodoItem';

/**
 * @param {{ todos: Todo[], onComplete: (id: string) => void }} props
 */
const TodoList = ({ todos = [], onComplete }) => {
  const TodoListTitle = useMemo(() => () => <h2 style={{ display: 'none' }}>Todo 리스트</h2>, []);

  if (todos.length === 0) {
    return (
      <div>
        <TodoListTitle />
        <p>할 일이 없어요!</p>
      </div>
    );
  }
  return (
    <div>
      <TodoListTitle />
      <ul style={{ listStyle: 'decimal' }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} onComplete={onComplete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
