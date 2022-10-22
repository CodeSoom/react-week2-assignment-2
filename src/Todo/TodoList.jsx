import Todos from './Todos';

export default function TodoList({ todoList, onDelete }) {
  return (
    <div>
      {

        todoList.length === 0 ? <p>할 일이 없습니다</p>
          : (
            <ol>
              {
                todoList.map((item) => (
                  <Todos
                    key={item.id}
                    todoItem={item}
                    onDelete={onDelete}
                  />
                ))
              }
            </ol>
          )

      }
    </div>

  );
}
