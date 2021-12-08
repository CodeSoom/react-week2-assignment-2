import AddTodoForm from './AddTodoForm';
import Header from './Header';

const TodoApp = () => (
  <section>
    <Header />
    <AddTodoForm onAdd={console.log} />
  </section>
);

export default TodoApp;
