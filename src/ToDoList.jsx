import { useState } from 'react';

export default function ToDoList({ todo, completion }) {
  // 아무일도 없으면 할일이 없어요 출력  if (!어레이) 할일이 없어요 출력
  // 추가를 눌렀을때 할일 추가  추가 누르면 어레이 뒤에 추가
  // 추가 되면  1 . 할일 이런식으로 숫자와 할일 보여주기 2. 3 .4 이런식으로
  // 완료 버튼을 누르면 할일을 삭제.   완료버튼 누르면 삭제 .. 필터써야하나??
  if (!todo) {
    return <p> 할일이 없어요!</p>;
  }
  if (todo) {
    return <p> 1. 할 일 </p>;
  }
  return (
    <>
      <div>

      </div>
    </>
  );
}
