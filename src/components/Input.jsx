import React from 'react';

export default function Input({ onChange, onClick }) {
  return (
    <div>
      <input placeholder="할 일을 입력해 주세요" onChange={(eventObject) => onChange(eventObject)} />
      <button type="button" onClick={(eventObject) => onClick(eventObject)}>추가</button>
    </div>
  );
}
