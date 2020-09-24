import React, { useState } from 'react';    
import InputBtn from './InputBtn'

function App(){
    const [inputText, setInputText] = useState({
        inputText:'',
    });


    return (
        <div>
        <h1>To-do</h1>
        <input type="text" placeholder="할 일을 입력해주세요." onChange={e => setInputText(e.target.value)}/>
        <InputBtn inputText={inputText}/>
        </div>
    );
}

export default App; 