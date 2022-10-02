import React from 'react';

export default function Items({ items, onClick }) {
  return (
    <>
      {items && items.length > 0 ? (
        <ol>
          {items.map((value) => (
            <li key={value.id}>
              {value.content}
              <button type="button" onClick={() => onClick(value.id)}>완료</button>
            </li>
          ))}
        </ol>
      ) : (
        <p>
          할일 없숑!!
        </p>
      )}
    </>
  );
}
