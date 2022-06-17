import React, { useState } from 'react';

export default function TodoInput({ onClick }) {
  const [contents, setContents] = useState('');

  function handleChange(event) {
    setContents(event.target.value);
  }

  function handleClickAdd() {
    if (!contents) {
      /* eslint-disable */
      alert('할 일을 입력해주세요!');
      return;
    }

    onClick(contents);
    setContents('');
  }

  return (
    <div>
      <input type="text" name="title" value={contents} onChange={handleChange} />
      <button type="button" onClick={handleClickAdd}>추가</button>
    </div>
  );
}
