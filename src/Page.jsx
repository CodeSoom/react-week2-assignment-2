import Todos from './Todos';
import AddTodo from './AddTodo';

export default function Page({ onClick }) {  
  return (
    <div>
      <h1>To-do</h1>

      <AddTodo
        onClick={onClick}
      />

      <Todos></Todos>

    </div>
  );
}
