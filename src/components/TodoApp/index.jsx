import AddTodoForm from './AddTodoForm';
import Header from './Header';
import List from './TodoList';

import useTodos from './useTodos';

const TodoApp = () => {
  const { todos, addTodo, removeTodo } = useTodos({ todos: [] });
  const handleAddTodo = (todo) => {
    addTodo(todo);
  };
  const handleCompleteTodo = (id) => {
    removeTodo(id);
  };

  return (
    <section>
      <Header />
      <AddTodoForm onAdd={handleAddTodo} />
      <List todos={todos} onComplete={handleCompleteTodo} />
    </section>
  );
};

export default TodoApp;
