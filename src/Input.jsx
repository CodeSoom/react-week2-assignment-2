import React from 'react';

export default function Input({ onClick }) {
  return (
    <p>
      <input type="text" placeholder="할 일을 입력해 주세요" />
      <button type="button" onClick={onClick}>
        추가ㅇㅇ
      </button>
    </p>
  )
}
