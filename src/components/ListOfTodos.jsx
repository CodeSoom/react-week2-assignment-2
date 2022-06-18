const todoList = [];
export default function ListOfTodos({ todo }) {
  console.log(todoList);

  if (todo || false) {
    todoList.push(todo);
    console.log('list');
  }

  return (
    <ol>
      {todoList.map((i) => (
        <li>{i}</li>
      ))}
    </ol>
  );
}
