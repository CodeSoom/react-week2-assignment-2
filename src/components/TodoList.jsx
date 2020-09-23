import React from 'react';

function TodoList({ list }) {
  return (
    <div>
      {
        list.length === 0
          ? '할 일이 없어요!'
          : (
            <ol>
              {list.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ol>
          )
      }
    </div>
  );
}

export default TodoList;
