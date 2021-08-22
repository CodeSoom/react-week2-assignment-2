import React from 'react';

export default function Form({ value, onChange, onClick }) {
  return (
    <p>
      <input 
        type="text" 
        placeholder="할 일을 입력해 주세요" 
        value={value}
        onChange={onChange} // 입력을 할 때마다 onChange가 실행
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </p>
  )
}
