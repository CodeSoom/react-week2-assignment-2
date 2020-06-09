import React from 'react';

export default function TodoAddButton({ onClick }) {
  return (
    <button type="button" onClick={() => onClick('이제 인자를 받는다.')}>추가</button>
  );
}
