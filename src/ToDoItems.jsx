import _ from 'lodash';

import toDo from './constant/todo';

export function ToDoItems({ toDos = [], onClick }) {
  return (
    <>
      {_.isEmpty(toDos) ? (
        toDo.noData
      ) : (
        <ol>
          {toDos.map((toDoItem, index) => (
            <li key={index}>
              {toDoItem}
              <button
                onClick={() => {
                  onClick(index);
                }}
              >
                {toDo.clear}
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
