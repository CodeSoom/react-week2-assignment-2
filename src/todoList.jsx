import React from 'react';

export default function TodoList({ array = [], handleClickDone }) {
  return (
    <>
      {array.length === 0
        ? <p>할 일이 없어요!</p>
        : (
          <ol>
            {array.map((item) => (
              <li key={item}>
                {item}
                <button
                  type="button"
                  onClick={() => handleClickDone(item)}
                >
                  완료
                </button>
              </li>
            ))}
          </ol>
        )}
    </>
  );
}
