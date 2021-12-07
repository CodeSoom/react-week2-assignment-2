import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function TodoList({text}){
   
    return (
        <ul>
            {text}
        </ul>
        
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
    const [state, setState] = useState({text : ''})
    const {text} = state
    function onChangeText(e){
        setState({text : e.target.value});
    }

    const [submitText, setSubmitText] = useState('');
    function onClickSubmit(){
        setSubmitText(text)
        setState({text: ''})        
    }
    return (
      <>
        <TodoInput text={text} onChange ={onChangeText} onClick={onClickSubmit}/>
        <TodoList text={submitText} />
      </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));