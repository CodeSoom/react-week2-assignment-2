/* eslint-disable react/no-array-index-key */
import TodoItem from './TodoItem';

const TodoList = ({ todoItemList = [], onClickComplete }) => (
  <>
    {
      todoItemList.length === 0 ? <span>할 일이 없어요!</span>
        : todoItemList.map((todoItem, idx) => <TodoItem key={`todoItem-${idx}`} idx={idx} title={todoItem} onClick={() => onClickComplete(todoItem)} />)
    }
  </>
);

export default TodoList;
