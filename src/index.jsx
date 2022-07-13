/* @jsx React.createElement */

import React from 'react';
import ReactDOM from 'react-dom';

// 추가하기 컴포넌트


// 삭제하기 컴포넌트


// Input 컴포넌트
function Page(){
    return (
        <div>
            <input type="text" placeholder="할 일을 입력해주세요." />
            <button type="button">추가</button>
        </div>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById('app')
);
