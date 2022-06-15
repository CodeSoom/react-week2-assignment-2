export default function App() {
  return (
    <div className="container">
      <h1 className="title">To-do</h1>
      <form className="todo-form">
        <input type="text" className="todo-input" />
        <button type="submit" className="todo-submit">추가</button>
      </form>

      <ul className="todo-list">
        <li className="todo-item">
          <strong className="todo-item__title">아무것도 하지 않기</strong>
          <button type="button" className="todo-item__complete">완료</button>
        </li>
      </ul>
    </div>
  );
}
