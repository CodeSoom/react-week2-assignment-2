/**
 * @param {{ todo: Todo, onComplete: (id: string) => void }} { todo, onComplete }
 * @return {import('react').ReactElement}
 */
const TodoItem = ({ todo, onComplete }) => {
  const { id, title } = todo;
  const handleClick = () => onComplete(id);
  return (
    <article key={id}>
      <h3 style={{ display: 'inline', fontSize: '1rem', fontWeight: 'normal' }}>{title}</h3>
      <button style={{ marginLeft: '12px' }} type="button" onClick={handleClick}>완료</button>
    </article>
  );
};

export default TodoItem;
