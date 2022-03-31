export default function ToDoList({ todos, onClick }) {
  // 아무일도 없으면 할일이 없어요 출력  if (!어레이) 할일이 없어요 출력
  // 추가를 눌렀을때 할일 추가  추가 누르면 어레이 뒤에 추가
  // 추가 되면  1 . 할일 이런식으로 숫자와 할일 보여주기 2. 3 .4 이런식으로
  // 완료 버튼을 누르면 할일을 삭제.   완료버튼 누르면 삭제 .. 필터써야하나??

  if (!todos) {
    return <p> 할일이 없어요!</p>;
  }
  if (todos) {
    return (
      todos.map((todo, id) => (
        <li key={todo.id}>
          <p>
            {id}
            {todos}
          </p>
          <button
            type="button"
            onClick={onClick(id)}
          >
            완료
          </button>
        </li>
      ))
    );
  }
}
