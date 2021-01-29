import React from 'react';

import Input from './input'
import AddButton from './addButton'
import CompleteButton from './completeButton'

export default function Page({ inputText, onChange, addClick, todo, clickComplete }){

    return (<div>
        <Input
            text={inputText}
            onChange={onChange}
        />
        <AddButton
            text="추가"
            onClick = {addClick}
        />
        <ul>
            {
            !todo.length ? 
                <div>할 일이 없어요!</div> :
                todo.map(({title, index}, i) => (
                    <div key={index} Style="margin-top:10px">{i+1}. {title}
                    <CompleteButton
                        index={index}
                        text="완료"
                        onClick={clickComplete}
                    />
                    </div>
                ))
            }
        </ul>
    </div>
        );
}
