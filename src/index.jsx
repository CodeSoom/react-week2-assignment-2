/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 추가하기 컴포넌트
function addList(i) {
    // console.log(i);

}

// input 값 입력받기
function AddInput(){
    
    const [text, setText] = useState('');

    const onChange = (e) => {
        console.log(e.target);

        // console.log(e.target.value);

        setText(e.target.value); // 인풋의 벨류값을 set 해줍니다.
    }
    
    const onClick = () => {
        console.log(text); // 입력 받은 value 값을 클릭할때 가져옵니다.
    }

    return (
        <div>
            <div>
                <input type="text" onChange={onChange} value={text} placeholder="할 일을 입력해주세요." />
            </div>
            <div>
                <button type="button" onClick={onClick}>추가</button>        
            </div>
        </div>
    )
}

// 삭제하기 컴포넌트


// Input 컴포넌트
function Page(){
    return (
        <div>
            <AddInput />
        </div>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById('app')
);
