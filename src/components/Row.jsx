import React from 'react';

export default function Row({ index, todo, onClick }) {
  return (
    <p>
      {`${index + 1}. ${todo}`}
      <button type="button" onClick={() => onClick(index)}>완료</button>
    </p>
  );
}
