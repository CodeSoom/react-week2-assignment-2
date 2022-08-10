export default function ToDos({ toDos, onDeleteButtonClick }) {
    return (
      <ol>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.content}</span>
            <button type="button" onClick={() => onDeleteButtonClick(toDo.id)}>완료</button>
          </li>
        ))}
      </ol>
    );
  }
  