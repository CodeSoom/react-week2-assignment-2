import Title from './components/Title';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <>
      <Title title="To-do" />
      <InputTodo />
      <TodoList />
    </>
  );
}
