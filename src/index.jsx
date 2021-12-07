import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function TodoList({text}){
    return (
        <ol>
            {text.map((v) => (                
                    <li key={v}>{v}</li>                    
            ))}
        </ol>
        
    )
}

function TodoInput({text, onChange, onClick}) {
    return (
        <>
        <div> 
            <input type="text" placeholder="할 일을 입력해주세요" value={text} onChange={onChange}/>
            <button type="button" onClick={onClick}>추가</button>
        </div>            
        </>
    )
}

function App(){
    const [text, setText] = useState('')
    function onChangeText(e){
        setText(e.target.value);
    }

    const [submitText, setSubmitText] = useState([]);
    function onClickSubmit(){
        setSubmitText((prev) => ([...prev, text]), () => console.log(submitText))
        console.log(submitText)
        setText('')        
    }
    return (
      <>
        <TodoInput text={text} onChange ={onChangeText} onClick={onClickSubmit}/>
        <TodoList text={submitText} />
      </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));