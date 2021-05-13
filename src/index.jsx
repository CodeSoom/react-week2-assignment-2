import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// 리액트 2-2 과제 : 컴포넌트 분리
/**
 * 1) 2-1과 중복된 부분 수정
 *  - import 라이브러리/로컬컴포넌트 분리,
 *  - app 컴포넌트 분리
 *  - propTypes 적용
 *  - 인라인 함수로 변경 (읽기 좋게 만들기)
 */
ReactDOM.render(<App />, document.getElementById('app'));
