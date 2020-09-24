import React, { useState } from 'react';    

function App(){
    const [inputText, setInputText] = useState({
        inputText:'',
    });

    const addList = (e) => {
        e.preventDefault();
        

        // 배열만들기
        // 텍스트 배열에 넣기
        // 배열 뒤에다가 붙이기
        // 완료 버튼 붙이기
        // 완료 버튼 누를 경우 배열에서 해당 key값을 지우기
    }

    return (
        <>
        <h1>To-do</h1>
        <input type="text" placeholder="할 일을 입력해주세요." onChange={e => setInputText(e.target.value)}/>
        <button onClick={addList}>추가</button>
        </>
    );
}

export default App; 