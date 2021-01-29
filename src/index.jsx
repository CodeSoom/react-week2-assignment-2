import React, {useState} from 'react';
import ReactDOM from 'react-dom';


import Page from './page'

/*
사용자는 할 일을 입력할 수 있습니다.
사용자는 추가 버튼을 눌러서 할 일을 추가할 수 있습니다.
사용자는 할 일 목록을 볼 수 있습니다.
사용자는 완료 버튼을 눌러 할 일을 삭제할 수 있습니다.

if는 사용할 수 있어도 else 사용하실 수 없습니다. GuardClauses 방법을 사용해주세요.
switch는 사용하실 수 없습니다.
let은 사용하실 수 없습니다. const만을 사용하여 문제를 해결해주세요.
함수 이름과 변수 이름에 줄임말은 사용하실 수 없습니다. 길더라도 명확하게 써주세요.
indent(인덴트, 들여쓰기) depth를 1로 유지해주세요. 예를 들어, for문 안에 if문이 있으면 indent depth는 2입니다. depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 됩니다.

ESLint를 돌린 결과 아무런 문제가 없어야 합니다.
모든 인수 테스트를 통과시켜야 합니다.
한 파일에는 하나의 컴포넌트만 있어야 합니다.
*/

function App(){
    const [toDoState, setToDoState] = useState({index:0, todo:[]});
    const [inputState, setInputState] = useState({ inputText:"" });
    const {inputText} = inputState;
    const {todo} = toDoState;
    
    function addClick(){
        const {inputText} = inputState;
        const {index, todo} = toDoState;
        setInputState({...inputState, inputText:""});
        setToDoState({...toDoState,index:index+1, todo:[...todo,{index:index+1,title:inputText}]});
    }
    function onChange(e){
        setInputState({...inputState, inputText:e.target.value});
    }
    function clickComplete(index){
        setToDoState({...toDoState, todo:[...todo.filter(v=>v.index!=index)]});
    }

    return (
    <Page
        inputText={inputText}
        onChange={onChange}
        addClick={addClick}
        todo={todo}
        clickComplete={clickComplete}
    />
    )
}
ReactDOM.render(<App/>, document.getElementById('app'));
