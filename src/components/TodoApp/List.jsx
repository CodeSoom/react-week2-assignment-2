import Todo from '../../classes/Todo';

/**
 * @param {Todo[]} [todos=[]]
 */
const List = ({ todos = [], onComplete }) => (
  <div>
    <h2 style={{ display: 'none' }}>Todo 리스트</h2>
    {
      todos.length === 0 ? <p>할 일이 없어요!</p> : (
        <ul style={{ listStyle: 'decimal' }}>
          {todos.map((todo) => {
            if (!(todo instanceof Todo)) {
              return null;
            }
            const { id, title } = todo;
            const handleClick = () => onComplete(id);
            return (
              <li key={id}>
                <h3 style={{ display: 'inline', fontSize: '1rem', fontWeight: 'normal' }}>{title}</h3>
                <button style={{ marginLeft: '12px' }} type="button" onClick={handleClick}>완료</button>
              </li>
            );
          })}
        </ul>
      )
    }

  </div>
);

export default List;
