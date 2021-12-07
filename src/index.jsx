import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function TodoList({text, onClick}){
  

    return (
        <ol>
            {text.map((v) => (         
                <div key={v} onClick={onClick}>       
                    <li>{v}
                    <button type="button" >완료</button>                    
                    </li>
                </div>
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
        setSubmitText((prev) => ([...prev, text]))
        setText('')        
    }

    function onClickFinish(e) {
        console.log(e.currentTarget.innerText)
        setSubmitText((prev) => 
             prev.filter((v) => {
               return (v+'완료') !== e.currentTarget.innerText})

        )
    }

    return (
      <>
        <TodoInput text={text} onChange ={onChangeText} onClick={onClickSubmit}/>
        <TodoList text={submitText} onClick={onClickFinish} />
      </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));