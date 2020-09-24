import React, { useState } from 'react';

export default function InputBtn({inputText}){
    const [listItem, setListItem] = useState
    ({
        list: [{
            id:0,
            item:'',
        }],
    });
    const addList = (inputText) => {
        setListItem({
            list: list.concat({id: id++, item: inputText}),
        });
        console.log(list);

    }

    return (
        <div>
        <button onClick={() => addList(inputText)}>추가</button>
        </div>
    )
}