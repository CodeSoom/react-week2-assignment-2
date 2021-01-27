import React from 'react';

export default function AddForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
      />
      <button type="button">추가</button>
    </form>
  );
}
