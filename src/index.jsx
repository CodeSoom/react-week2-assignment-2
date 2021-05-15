import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// 리액트 2-2 과제 : 피드백 반영 진행중
/**
 * 아래는 완료된 피드백 수정 사항입니다.
 *
 *
 * 1) 2-1과 중복된 부분 수정
 *  - import 라이브러리/로컬컴포넌트 분리,
 *  - app 컴포넌트 분리
 *  - propTypes 적용
 *  - 인라인 함수로 변경 (읽기 좋게 만들기)
 *
 * 2) lint예외처리 eslint-disable react/prop-types 제거 및 propTypes 작성
 *
 * 3) 혼란을 야기하는 변수명 변경 (toDoList -> toDos), (i -> todo),
 *
 * 4) 삼항 연산자 대신 Guard Clauses 스타일로 예외처리 해보기
 *    (src/components/toDoItems.jsx ) 할일 목록 그리는 컴포넌트 수정됨.
 *
 * 5) map()으로 반복하여 컴포넌트 그릴 때, key값 입력하기
 *
 * 6) input value값 얻는 방법변경 (onChange 사용)
 *
 * 7) ToDoItmes.jsx에서 ToDoList 그릴때, 구조분해 할당 응용해보기.
 */
ReactDOM.render(<App />, document.getElementById('app'));
