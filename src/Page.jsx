import React from 'react';

function Page({onChange, onClick, todoList}) {
  return (
    <div>
      <p>To-do</p>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>추가</button>
      <ol>
        {todoList}
      </ol>
    </div>
  )
}

export default Page;