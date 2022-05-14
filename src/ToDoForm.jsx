import toDo from './constant/todo';

export function ToDoForm({ toDoText, onChange, onClick }) {
  return (
    <form autoComplete="off">
      <input
        type="text"
        placeholder={toDo.placeHolder}
        onChange={onChange}
        value={toDoText}
      />
      <button type="submit" onClick={onClick}>
        {toDo.add}
      </button>
    </form>
  );
}
